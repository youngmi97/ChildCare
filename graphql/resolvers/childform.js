const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");
//const { UserInputError } = require("apollo-server");

// const {
//   validateRegisterInput,
//   validateLoginInput,
// } = require("../../util/validators");
// const { SECRET_KEY } = require("../../config");
const User = require("../../models/User");

const ChildForm = require("../../models/ChildForm");

module.exports = {
  Mutation: {
    async submitChildForm(_, { childForm }) {
      console.log("submitChildForm called");
      // How to identify the user ID?
      // hash password and create an auth token

      const newChildForm = new ChildForm({
        childForm,
        createdAt: new Date().toISOString(),
      });

      const user = await User.findOne({ id: childForm.userId });

      await newChildForm.save();

      return user;
    },
  },
};
