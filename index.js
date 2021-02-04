//const { ApolloServer, PubSub } = require("apollo-server");
const { ApolloServer, PubSub } = require("apollo-server-express");
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
const { graphqlConnect } = require("apollo-server-express");
const http = require("http");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

const pubsub = new PubSub();

app.use("/graphql", bodyParser.json());

app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
  introspection: true,
  playground: true,
});

server.applyMiddleware({ app });

MONGODB();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// http
//   .createServer(app)
//   .listen(PORT, () => console.log(`Server started on port ${PORT}`));
