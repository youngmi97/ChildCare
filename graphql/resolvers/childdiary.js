const ChildDiary = require("../../models/ChildDiary");

const week = {
  monday: "",
  tuesday: "",
  wednesday: "",
  thursday: "",
  friday: "",
  saturday: "",
  sunday: "",
};

const program = {
  program1: week,
  program2: week,
  program3: week,
  program4: week,
  program5: week,
  program6: week,
};

const emptyReturn = {
  userId: "",
  selected: program,
  activity: program,
  comment: program,
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
        const incomingProgram = diaryInput.program;
        const incomingDay = diaryInput.day;
        //console.log("incomingDate", diaryInput);

        updatingDiary.selected[incomingProgram][incomingDay] =
          diaryInput.selected;
        updatingDiary.activity[incomingProgram][incomingDay] =
          diaryInput.activity;
        updatingDiary.comment[incomingProgram][incomingDay] =
          diaryInput.comment;

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
        const incomingProgram = diaryInput.program;
        const incomingDay = diaryInput.day;

        const initDays = {
          monday: "",
          tuesday: "",
          wednesday: "",
          thursday: "",
          friday: "",
          saturday: "",
          sunday: "",
        };

        const initPrograms1 = {
          program1: Object.assign({}, initDays),
          program2: Object.assign({}, initDays),
          program3: Object.assign({}, initDays),
          program4: Object.assign({}, initDays),
          program5: Object.assign({}, initDays),
          program6: Object.assign({}, initDays),
        };
        const initPrograms2 = {
          program1: Object.assign({}, initDays),
          program2: Object.assign({}, initDays),
          program3: Object.assign({}, initDays),
          program4: Object.assign({}, initDays),
          program5: Object.assign({}, initDays),
          program6: Object.assign({}, initDays),
        };
        const initPrograms3 = {
          program1: Object.assign({}, initDays),
          program2: Object.assign({}, initDays),
          program3: Object.assign({}, initDays),
          program4: Object.assign({}, initDays),
          program5: Object.assign({}, initDays),
          program6: Object.assign({}, initDays),
        };

        const initSelectedFields = Object.assign({}, initPrograms1);
        const initActivityFields = Object.assign({}, initPrograms2);
        const initCommentFields = Object.assign({}, initPrograms3);

        initSelectedFields[incomingProgram][incomingDay] = diaryInput.selected;
        initActivityFields[incomingProgram][incomingDay] = diaryInput.activity;
        initCommentFields[incomingProgram][incomingDay] = diaryInput.comment;

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
