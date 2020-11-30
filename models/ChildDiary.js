const { model, Schema } = require("mongoose");

const childDiary = new Schema({
  userId: String,
  selected: {
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String,
  },
  activity: {
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String,
  },
  comment: {
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String,
  },
});

module.exports = model("ChildDiary", childDiary);
