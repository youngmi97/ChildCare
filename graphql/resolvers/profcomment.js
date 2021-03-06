const ProfComment = require("../../models/ProfComment");

module.exports = {
  Query: {
    async getProfComment(_, { userId }) {
      try {
        console.log("getProfComment Query called");
        const profComment = await ProfComment.find({
          userId: userId,
        });

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
        userId: parsedShit.userId,
        profId: parsedShit.profId,
        perFeedback: parsedShit.perFeedback,
        eduFeedback: parsedShit.eduFeedback,
        devFeedback: parsedShit.devFeedback,
        illFeedback: parsedShit.illFeedback,
        famFeedback: parsedShit.famFeedback,
        nwrFeedback: parsedShit.nwrFeedback,
        ovrFeedback: parsedShit.ovrFeedback,
        nwrScore: parsedShit.nwrScore,
        srScore: parsedShit.srScore,
      });
      console.log(newProfComment);
      await newProfComment.save();

      return true;
    },
  },
};
