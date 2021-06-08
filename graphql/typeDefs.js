const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }
  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }

  type ProfComment {
    userId: String!
    profId: String!
    perFeedback: String
    eduFeedback: String
    devFeedback: String
    illFeedback: String
    famFeedback: String
    nwrFeedback: String
    ovrFeedback: String
    nwrScore: Int
    srScore: Int
  }

  input ProfCommentInput {
    userId: String!
    profId: String!
    perFeedback: String
    eduFeedback: String
    devFeedback: String
    illFeedback: String
    famFeedback: String
    nwrFeedback: String
    ovrFeedback: String
    nwrScore: Int
    srScore: Int
  }

  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    assignee: String
    createdAt: String!
  }

  type Professional {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

  type UserReturn {
    id: ID!
    username: String!
    email: String!
    name: String!
    dateOfBirth: String!
    primaryLanguage: String!
    schoolLanguage: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  input RegisterProfessionalInput {
    username: String!
    password: String!
    confirmPassword: String!
    name: String!
    gender: String!
    birthday: String!
    address: String!
    occupation: String!
    institution: String!
    objective: String!
    email: String!
  }

  type ChildForm {
    userId: String!
    gender: String!
    name: String!
    email: String!
    dateOfBirth: String!
    primaryLanguage: String!
    education: String!
    history: String!
    problem: String!
    broSis: String!
    impaired: String!
    impairment: String!
    schoolLanguage: String!
    reason: String!
    improvement: String!
    awareness: String!
    institute: String!
    treatment: String!
    teacherFeedback: String!
    teacherFeedback1: String
    walkingAge: String!
    speakingAge: String!
    speakingAgeSentence: String!
    developmentProblem: String!
    developmentProblem1: String
    muscleProblem: String!
    muscleProblem1: String
    illnessAtBirth: String!
    illnessAtBirth1: String
    illness: String!
    illness1: String
    surgery: String!
    surgery1: String
    medication: String!
    medication1: String
    familyHistory: String!
    familyMember: String!
    educationScore: String!
    developmentScore: String!
    illnessScore: String!
    familyScore: String!
    createdAt: String!
  }

  input ChildFormInput {
    userId: String
    gender: String
    name: String
    email: String
    dateOfBirth: String
    primaryLanguage: String
    education: String
    history: String
    problem: String
    broSis: String
    impaired: String
    impairment: String
    schoolLanguage: String
    reason: String
    improvement: String
    awareness: String
    institute: String
    treatment: String
    teacherFeedback: String
    teacherFeedback1: String
    walkingAge: String
    speakingAge: String
    speakingAgeSentence: String
    developmentProblem: String
    developmentProblem1: String
    muscleProblem: String
    muscleProblem1: String
    illnessAtBirth: String
    illnessAtBirth1: String
    illness: String
    illness1: String
    surgery: String
    surgery1: String
    medication: String
    medication1: String
    familyHistory: String
    familyMember: String
  }

  type ChildDiaries {
    userId: String
    activity: diaryProgram
    selected: diaryProgram
    comment: diaryProgram
  }

  type diaryProgram {
    program1: diaryWeek
    program2: diaryWeek
    program3: diaryWeek
    program4: diaryWeek
    program5: diaryWeek
    program6: diaryWeek
  }

  type diaryWeek {
    monday: String
    tuesday: String
    wednesday: String
    thursday: String
    friday: String
    saturday: String
    sunday: String
  }

  input ChildDiaryInput {
    userId: String
    program: String
    day: String
    activity: String
    selected: String
    comment: String
  }

  type Query {
    getPosts: [Post]
    getUsers: [UserReturn]!
    getProfessionals: [UserReturn]!
    getPost(postId: ID!): Post
    getChildForm(userId: String!): ChildForm!
    getProfComment(userId: String!): ProfComment!
    getChildDiaries(userId: String!): ChildDiaries!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    deleteUser(username: String!): Boolean!

    updateAssignee(userId: String!, assignee: String): User!

    registerProfessional(
      registerInput: RegisterProfessionalInput
    ): Professional!
    loginProfessional(username: String!, password: String!): Professional!

    createChildDiary(diaryInput: ChildDiaryInput): ChildDiaries!

    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
    submitChildForm(childForm: ChildFormInput): Boolean!

    createProfComment(profComment: ProfCommentInput): Boolean!
  }
  type Subscription {
    newPost: Post!
  }
`;
