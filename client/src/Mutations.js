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
      srScore
    }
  }
`;

const CREATE_PROF_COMMENTS = gql`
  mutation createProfComment(
    $userId: String!
    $profId: String!
    $perFeedback: String
    $eduFeedback: String
    $devFeedback: String
    $illFeedback: String
    $famFeedback: String
    $nwrFeedback: String
    $ovrFeedback: String
    $nwrScore: Int
    $srScore: Int
  ) {
    createProfComment(
      profComment: {
        userId: $userId
        profId: $profId
        perFeedback: $perFeedback
        eduFeedback: $eduFeedback
        devFeedback: $devFeedback
        illFeedback: $illFeedback
        famFeedback: $famFeedback
        nwrFeedback: $nwrFeedback
        ovrFeedback: $ovrFeedback
        nwrScore: $nwrScore
        srScore: $srScore
      }
    )
  }
`;

const GET_USER_DIARY = gql`
  query getChildDiaries($userId: String!) {
    getChildDiaries(userId: $userId) {
      userId
      activity {
        program1 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program2 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program3 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program4 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program5 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program6 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
      }
      comment {
        program1 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program2 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program3 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program4 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program5 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program6 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
      }
      selected {
        program1 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program2 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program3 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program4 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program5 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program6 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
      }
    }
  }
`;

const UPDATE_DIARY = gql`
  mutation createChildDiary(
    $userId: String
    $program: String
    $day: String
    $activity: String
    $selected: String
    $comment: String
  ) {
    createChildDiary(
      diaryInput: {
        userId: $userId
        program: $program
        day: $day
        activity: $activity
        selected: $selected
        comment: $comment
      }
    ) {
      userId
      activity {
        program1 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program2 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program3 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program4 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program5 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program6 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
      }
      comment {
        program1 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program2 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program3 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program4 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program5 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program6 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
      }
      selected {
        program1 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program2 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program3 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program4 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program5 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        program6 {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
      }
    }
  }
`;

export {
  SUBMIT_CHILD_FORM,
  GET_CHILD_FORM,
  GET_PROF_COMMENTS,
  GET_USER_DIARY,
  UPDATE_DIARY,
  CREATE_PROF_COMMENTS,
};
