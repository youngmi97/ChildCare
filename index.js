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

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
