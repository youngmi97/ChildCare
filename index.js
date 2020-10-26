const { ApolloServer, PubSub } = require("apollo-server");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const { MONGODB } = require("./config.js");
const { callSttPromise } = require("./util/aws-stt");
const dotenv = require("dotenv").config({
  path: require("find-config")(".env"),
});

const PORT = process.env.PORT || 5000;

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});

MONGODB();

// TODO
// Invoke callSttPromise when it is called from the frontend
// Q: Should all these Promise calls just take place from frontend??
// Q: How to tell that the transcription job has finished via Lambda Function ??
callSttPromise()
  .then(function () {
    console.log("Promise Resolved");
  })
  .catch(function () {
    console.log("Promise Rejected");
  });

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
