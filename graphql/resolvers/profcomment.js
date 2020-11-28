const ProfComment = require("../../models/ProfComment");

module.exports = {
  Query: {
    async getProfComment(_, { profId, username }) {
      try {
        console.log("getProfComment Query called");
        const profComment = await ProfComment.find({
          profId: profId,
          username: username,
        });
        //console.log("childForm return", childForm);
        return profComment[0];
      } catch (err) {
        console.log("getProfComment error");
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createProfComment(_, { profComment }) {
      console.log("createProfComment called");
      // How to identify the user ID?
      // hash password and create an auth token
      // console.log("userId", userId);

      const parsedShit = JSON.parse(JSON.stringify(profComment));

      console.log("parsed shit", JSON.parse(JSON.stringify(profComment)));

      const newProfComment = new ProfComment({
        username: parsedShit.username,
        profId: parsedShit.profId,
        perFeedback: parsedShit.perFeedback,
        eduFeedback: parsedShit.eduFeedback,
        devFeedback: parsedShit.devFeedback,
        illFeedback: parsedShit.illFeedback,
        famFeedback: parsedShit.famFeedback,
        nwrFeedback: parsedShit.nwrFeedback,
        ovrFeedback: parsedShit.ovrFeedback,
      });

      await newProfComment.save();

      return true;
    },
  },
};
