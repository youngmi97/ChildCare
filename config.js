const mongoose = require("mongoose");
const URI =
  "mongodb+srv://childcare:Waddle7331!@cluster0.ru8zl.mongodb.net/childSpeechApp?retryWrites=true&w=majority";

const MONGODB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  mongoose.set("useFindAndModify", false);
  console.log("db connected!");
};

const SECRET_KEY = "asnidnwqidonqondksndiqnwdonsndqoiwdn";

module.exports = { MONGODB: MONGODB, SECRET_KEY: SECRET_KEY };
