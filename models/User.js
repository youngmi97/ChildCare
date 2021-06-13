const { model, Schema } = require("mongoose");

// const userSchema = new Schema({
//   username: String,
//   password: String,
//   name: String,
//   gender: String,
//   childBirthday: String,
//   address: String,
//   objective: String,
//   email: String,
//   createdAt: String,
// });

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  assignee: String,
  canWatch: String,
  createdAt: String,
});

module.exports = model("User", userSchema);
