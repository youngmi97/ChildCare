const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");

const {
  validateRegisterInput,
  validateLoginInput,
} = require("../../util/validators");
const { SECRET_KEY } = require("../../config");
const User = require("../../models/User");
const ChildForm = require("../../models/ChildForm");

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
}

module.exports = {
  Query: {
    async getUsers() {
      console.log("getUsers requested");
      try {
        const users = await User.find();

        //name, dateOfBirth, primaryLanguage, schoolLanguage

        const filteredUsers = users.map(async (user) => {
          const userChildForm = await ChildForm.find({ userId: user._id });

          const name = userChildForm.length > 0 ? userChildForm[0].name : "";
          const dateOfBirth =
            userChildForm.length > 0 ? userChildForm[0].dateOfBirth : "";
          const primaryLanguage =
            userChildForm.length > 0 ? userChildForm[0].primaryLanguage : "";
          const schoolLanguage =
            userChildForm.length > 0 ? userChildForm[0].schoolLanguage : "";
          return {
            id: user._id,
            username: user.username,
            email: user.email,
            name: name,
            dateOfBirth: dateOfBirth,
            primaryLanguage: primaryLanguage,
            schoolLanguage: schoolLanguage,
          };
        });

        // console.log("filteredUsers", filteredUsers);
        return filteredUsers;
      } catch (err) {
        console.log("getUsers error");
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async login(_, { username, password }) {
      const { errors, valid } = validateLoginInput(username, password);

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const user = await User.findOne({ username });

      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("User not found", { errors });
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        errors.general = "Wrong crendetials";
        throw new UserInputError("Wrong crendetials", { errors });
      }

      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } }
    ) {
      // Validate user data
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
      );

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      // TODO: Make sure user doesnt already exist
      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError("Username is taken", {
          errors: {
            username: "This username is taken",
          },
        });
      }

      // hash password and create an auth token
      password = await bcrypt.hash(password, 12);
      const assignee = "";

      const newUser = new User({
        email,
        username,
        password,
        assignee,
        createdAt: new Date().toISOString(),
      });

      const res = await newUser.save();
      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
    async updateAssignee(_, { userId, assignee }) {
      console.log("update assignee called");
      User.findOneAndUpdate(
        { _id: userId },
        {
          $set: {
            assignee: assignee,
          },
        },
        { new: true },
        (err, doc) => {
          if (err) {
            console.log("Something wrong when updating assignee!");
          }

          // doc should be the updated document!
        }
      );
      const newUser = await User.findById(userId);
      console.log("newUser", newUser);
      return newUser;
    },
  },
};
