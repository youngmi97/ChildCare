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
    createdAt: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
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

  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
    getChildForm(userId: String!): ChildForm
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
    submitChildForm(childForm: ChildFormInput): User!
  }
  type Subscription {
    newPost: Post!
  }
`;
