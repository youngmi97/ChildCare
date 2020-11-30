const { model, Schema } = require("mongoose");

// update resolver and typedef to match the following schema

const week = {
  monday: String,
  tuesday: String,
  wednesday: String,
  thursday: String,
  friday: String,
  saturday: String,
  sunday: String,
};

const program = {
  program1: week,
  program2: week,
  program3: week,
  program4: week,
  program5: week,
  program6: week,
};

const childDiary = new Schema({
  userId: String,
  selected: program,
  activity: program,
  comment: program,
});

module.exports = model("ChildDiary", childDiary);
