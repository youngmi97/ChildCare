const { model, Schema } = require("mongoose");

const professionalComment = new Schema({
  userId: String,
  profId: String,
  perFeedback: String,
  eduFeedback: String,
  devFeedback: String,
  illFeedback: String,
  famFeedback: String,
  nwrFeedback: String,
  ovrFeedback: String,
  nwrScore: Number,
  srScore: Number,
});

module.exports = model("ProfComment", professionalComment);
