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

function getEductionScore(history, teacherFeedback) {
  const historyScore = history === "Yes" ? 1 : 0;
  const teacherFeedbackScore = teacherFeedback === "Yes" ? 1 : 0;

  const res = historyScore + teacherFeedbackScore;

  return res.toString();
}

function getDevelopmentScore(
  walkingAge,
  speakingAge,
  speakingAgeSentence,
  developmentProblem,
  muscleProblem
) {
  const walkScore = walkingAge === "Slow" ? 1 : 0;
  const speakingScore = speakingAge === "Slow" ? 1 : 0;
  const sentenceScore = speakingAgeSentence === "Slow" ? 1 : 0;
  const devScore = developmentProblem === "Yes" ? 1 : 0;
  const muscleScore = muscleProblem === "Yes" ? 1 : 0;
  const res =
    walkScore + speakingScore + sentenceScore + devScore + muscleScore;
  return res.toString();
}

function getIllnessScore(illness, illnessAtBirth, surgery) {
  const illScore = illness === "Yes" ? 1 : 0;
  const illBirthScore = illnessAtBirth === "Yes" ? 1 : 0;
  const surgeryScore = surgery === "Yes" ? 1 : 0;
  const res = illScore + illBirthScore + surgeryScore;

  return res.toString();
}
function getFamilyScore(familyMember) {
  return familyMember.split(" ").length - 1;
}

module.exports = {
  Query: {
    async getChildForm(_, { userId }) {
      try {
        console.log("getChildForm Query called");
        const childForm = await ChildForm.find({ userId: userId });
        //console.log("childForm return", childForm);
        return childForm[0];
      } catch (err) {
        console.log("getChildForm error");
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async submitChildForm(_, { childForm }) {
      console.log("submitChildForm called");
      // How to identify the user ID?
      // hash password and create an auth token
      // console.log("userId", userId);

      const parsedShit = JSON.parse(JSON.stringify(childForm));

      console.log("parsed shit", JSON.parse(JSON.stringify(childForm)));

      //calc

      const educationScore = JSON.stringify();

      const newChildForm = new ChildForm({
        userId: parsedShit.userId,
        gender: parsedShit.gender,
        name: parsedShit.name,
        dateOfBirth: parsedShit.dateOfBirth,
        primaryLanguage: parsedShit.primaryLanguage,
        education: parsedShit.education,
        history: parsedShit.history,
        problem: parsedShit.problem,
        broSis: parsedShit.broSis,
        impaired: parsedShit.impaired,
        impairment: parsedShit.impairment,
        schoolLanguage: parsedShit.schoolLanguage,
        reason: parsedShit.reason,
        improvement: parsedShit.improvement,
        awareness: parsedShit.awareness,
        institute: parsedShit.institute,
        treatment: parsedShit.treatment,
        teacherFeedback: parsedShit.teacherFeedback,
        teacherFeedback1: parsedShit.teacherFeedback1,
        walkingAge: parsedShit.walkingAge,
        speakingAge: parsedShit.speakingAge,
        speakingAgeSentence: parsedShit.speakingAgeSentence,
        developmentProblem: parsedShit.developmentProblem,
        developmentProblem1: parsedShit.developmentProblem1,
        muscleProblem: parsedShit.muscleProblem,
        muscleProblem1: parsedShit.muscleProblem1,
        illnessAtBirth: parsedShit.illnessAtBirth,
        illnessAtBirth1: parsedShit.illnessAtBirth1,
        illness: parsedShit.illness,
        illness1: parsedShit.illness1,
        surgery: parsedShit.surgery,
        surgery1: parsedShit.surgery1,
        medication: parsedShit.medication,
        medication1: parsedShit.medication1,
        familyHistory: parsedShit.familyHistory,
        familyMember: parsedShit.familyMember,
        educationScore: getEductionScore(
          parsedShit.history,
          parsedShit.teacherFeedback
        ),
        developmentScore: getDevelopmentScore(
          parsedShit.walkingAge,
          parsedShit.speakingAge,
          parsedShit.speakingAgeSentence,
          parsedShit.developmentProblem,
          parsedShit.muscleProblem
        ),
        illnessScore: getIllnessScore(
          parsedShit.illness,
          parsedShit.illnessAtBirth,
          parsedShit.surgery
        ),
        familyScore: getFamilyScore(parsedShit.familyMember),
        createdAt: new Date().toISOString(),
      });

      //const user = await User.findOne({ id: childForm.userId });

      await newChildForm.save();

      return true;
    },
  },
};
