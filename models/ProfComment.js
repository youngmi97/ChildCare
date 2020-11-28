const { model, Schema } = require("mongoose");

const professionalComment = new Schema({
  username: String,
  profId: String,
  perFeedback: String,
  eduFeedback: String,
  devFeedback: String,
  illFeedback: String,
  famFeedback: String,
  nwrFeedback: String,
  ovrFeedback: String,
});

module.exports = model("ProfComment", professionalComment);
