const postsResolvers = require("./posts");
const usersResolvers = require("./users");
const commentsResolvers = require("./comments");
const childFormResolvers = require("./childform");
const professionalsResolvers = require("./professionals");

module.exports = {
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...postsResolvers.Query,
    ...childFormResolvers.Query,
    ...professionalsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
    ...childFormResolvers.Mutation,
    ...professionalsResolvers.Mutation,
  },
  Subscription: {
    ...postsResolvers.Subscription,
  },
};
