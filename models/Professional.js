const { model, Schema } = require("mongoose");

const professionalSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
});

module.exports = model("Professional", professionalSchema);
