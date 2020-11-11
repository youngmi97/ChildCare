const Evaluation = require("../../models/ChildForm");

module.exports = {
  Query: {
    async getEvaluations(_, args) {
      try {
        console.log("getEvaluations Query called");
        return true;
      } catch (err) {
        console.log("getChildForm error");
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async submitEvaluations(_, args) {
      console.log("submitEvaluations called");
      return true;
    },
  },
};
