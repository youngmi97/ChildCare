const postsResolvers = require("./posts");
const usersResolvers = require("./users");
const commentsResolvers = require("./comments");
const childFormResolvers = require("./childform");
const professionalsResolvers = require("./professionals");
const profcommentResolvers = require("./profcomment");

module.exports = {
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...postsResolvers.Query,
    ...childFormResolvers.Query,
    ...professionalsResolvers.Query,
    ...profcommentResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
    ...childFormResolvers.Mutation,
    ...professionalsResolvers.Mutation,
    ...profcommentResolvers.Mutation,
  },
  Subscription: {
    ...postsResolvers.Subscription,
  },
};
