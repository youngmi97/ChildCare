const { model, Schema } = require("mongoose");

const professionalSchema = new Schema({
  username: String,
  password: String,
  name: String,
  gender: String,
  birthday: String,
  address: String,
  occupation: String,
  institution: String,
  objective: String,
  email: String,
  createdAt: String,
});

module.exports = model("Professional", professionalSchema);
