const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");

const {
  validateRegisterInput,
  validateLoginInput,
} = require("../../util/validators");
const { SECRET_KEY } = require("../../config");

const Professional = require("../../models/Professional");

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

// Separate Login Context for Users and Professional

module.exports = {
  Query: {
    async getProfessionals() {
      console.log("getProfessionals requested");
      try {
        const professionals = await Professional.find();

        const filteredUsers = professionals.map((prof) => {
          return { id: prof._id, username: prof.username, email: prof.email };
        });

        return filteredUsers;
      } catch (err) {
        console.log("getUsers error");
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async loginProfessional(_, { username, password }) {
      const { errors, valid } = validateLoginInput(username, password);

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const professional = await Professional.findOne({ username });

      if (!professional) {
        errors.general = "User not found";
        throw new UserInputError("User not found", { errors });
      }

      const match = await bcrypt.compare(password, professional.password);

      if (!match) {
        errors.general = "Wrong crendetials";
        throw new UserInputError("Wrong crendetials", { errors });
      }

      const token = generateToken(professional);

      return {
        ...professional._doc,
        id: professional._id,
        token,
      };
    },

    async registerProfessional(
      _,
      {
        registerInput: {
          username,
          password,
          confirmPassword,
          name,
          gender,
          birthday,
          address,
          occupation,
          institution,
          objective,
          email,
        },
      }
    ) {
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
      const professional = await Professional.findOne({ username });
      if (professional) {
        throw new UserInputError("Username is taken", {
          errors: {
            username: "This username is taken",
          },
        });
      }

      password = await bcrypt.hash(password, 12);

      // What fields are going to be optional?
      const newUser = new Professional({
        username,
        password,
        name,
        gender,
        birthday,
        address,
        occupation,
        institution,
        objective,
        email,
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
  },
};
