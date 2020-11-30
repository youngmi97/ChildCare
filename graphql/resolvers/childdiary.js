const ChildDiary = require("../../models/ChildDiary");

const emptyReturn = {
  userId: "",
  selected: {
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  },
  activity: {
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  },
  comment: {
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  },
};

module.exports = {
  Query: {
    async getChildDiaries(_, { userId }) {
      try {
        console.log("getChildDiaries Query called");
        const diaries = await ChildDiary.find({
          userId: userId,
        });

        if (diaries.length != 0) {
          return diaries[0];
        } else {
          return emptyReturn;
        }
      } catch (err) {
        console.log("getChildDiaries error");
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createChildDiary(_, { diaryInput }) {
      console.log("createChildDiary called");

      // check if diary under the userId exists
      const existingDiary = await ChildDiary.find({
        userId: diaryInput.userId,
      });

      if (existingDiary.length != 0) {
        const updatingDiary = existingDiary[0];

        // !UPDATE
        console.log("updating existing diary");
        // add to existing diary
        // Check if its an update or an addition by checking the date
        const incomingDate = diaryInput.index;
        //console.log("incomingDate", diaryInput);

        updatingDiary.selected[incomingDate] = diaryInput.selected;
        updatingDiary.activity[incomingDate] = diaryInput.activity;
        updatingDiary.comment[incomingDate] = diaryInput.comment;

        //console.log("updatingDiary", updatingDiary);

        ChildDiary.findOneAndUpdate(
          { userId: diaryInput.userId },
          {
            $set: {
              selected: updatingDiary.selected,
              activity: updatingDiary.activity,
              comment: updatingDiary.comment,
            },
          },
          { new: true },
          (err, doc) => {
            if (err) {
              console.log("Something wrong when updating diary!");
            }
            // doc should be the updated document!
          }
        );

        return await ChildDiary.findOne({
          userId: diaryInput.userId,
        });
      } else {
        // !CERATE
        console.log("creating new diary");
        // create a new diary and add to initial fields
        const incomingDate = diaryInput.index;

        const initFields = {
          monday: "",
          tuesday: "",
          wednesday: "",
          thursday: "",
          friday: "",
          saturday: "",
          sunday: "",
        };

        const initSelectedFields = initFields;
        const initActivityFields = initFields;
        const initCommentFields = initFields;

        initSelectedFields[incomingDate] = diaryInput.selected;
        initActivityFields[incomingDate] = diaryInput.activity;
        initCommentFields[incomingDate] = diaryInput.comment;

        const newChildDiary = new ChildDiary({
          userId: diaryInput.userId,
          selected: initSelectedFields,
          activity: initActivityFields,
          comment: initCommentFields,
        });

        await newChildDiary.save();

        return newChildDiary;
      }
    },
  },
};
