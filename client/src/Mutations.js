import gql from "graphql-tag";

const SUBMIT_CHILD_FORM = gql`
  mutation submitChildForm(
    $userId: String
    $gender: String
    $name: String
    $email: String
    $dateOfBirth: String
    $primaryLanguage: String
    $education: String
    $history: String
    $problem: String
    $broSis: String
    $impaired: String
    $impairment: String
    $schoolLanguage: String
    $reason: String
    $improvement: String
    $awareness: String
    $institute: String
    $treatment: String
    $teacherFeedback: String
    $teacherFeedback1: String
    $walkingAge: String
    $speakingAge: String
    $speakingAgeSentence: String
    $developmentProblem: String
    $developmentProblem1: String
    $muscleProblem: String
    $muscleProblem1: String
    $illnessAtBirth: String
    $illnessAtBirth1: String
    $illness: String
    $illness1: String
    $surgery: String
    $surgery1: String
    $medication: String
    $medication1: String
    $familyHistory: String
    $familyMember: String
  ) {
    submitChildForm(
      childForm: {
        userId: $userId
        gender: $gender
        name: $name
        email: $email
        dateOfBirth: $dateOfBirth
        primaryLanguage: $primaryLanguage
        education: $education
        history: $history
        problem: $problem
        broSis: $broSis
        impaired: $impaired
        impairment: $impairment
        schoolLanguage: $schoolLanguage
        reason: $reason
        improvement: $improvement
        awareness: $awareness
        institute: $institute
        treatment: $treatment
        teacherFeedback: $teacherFeedback
        teacherFeedback1: $teacherFeedback1
        walkingAge: $walkingAge
        speakingAge: $speakingAge
        speakingAgeSentence: $speakingAgeSentence
        developmentProblem: $developmentProblem
        developmentProblem1: $developmentProblem1
        muscleProblem: $muscleProblem
        muscleProblem1: $muscleProblem1
        illnessAtBirth: $illnessAtBirth
        illnessAtBirth1: $illnessAtBirth1
        illness: $illness
        illness1: $illness1
        surgery: $surgery
        surgery1: $surgery1
        medication: $medication
        medication1: $medication1
        familyHistory: $familyHistory
        familyMember: $familyMember
      }
    )
  }
`;

const GET_CHILD_FORM = gql`
  query getChildForm($userId: String!) {
    getChildForm(userId: $userId) {
      name
      gender
      dateOfBirth
      primaryLanguage
      education
      history
      problem
      broSis
      impaired
      impairment
      schoolLanguage
      reason
      improvement
      awareness
      institute
      treatment
      teacherFeedback
      teacherFeedback1
      walkingAge
      speakingAge
      speakingAgeSentence
      developmentProblem
      developmentProblem1
      muscleProblem
      muscleProblem1
      illnessAtBirth
      illnessAtBirth1
      illness
      illness1
      surgery
      surgery1
      medication
      medication1
      familyHistory
      familyMember
      educationScore
      developmentScore
      illnessScore
      familyScore
    }
  }
`;

const GET_PROF_COMMENTS = gql`
  query getProfComment($userId: String!) {
    getProfComment(userId: $userId) {
      perFeedback
      eduFeedback
      devFeedback
      illFeedback
      famFeedback
      nwrFeedback
      ovrFeedback
    }
  }
`;

export { SUBMIT_CHILD_FORM, GET_CHILD_FORM, GET_PROF_COMMENTS };
