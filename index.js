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
const graphqlHTTP = require("express-graphql");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

const pubsub = new PubSub();
app.use(
  "/graphql",
  graphqlHTTP({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubsub }),
    introspection: true,
    playground: true,
  })
);

//const pubsub = new PubSub();

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => ({ req, pubsub }),
//   introspection: true,
//   playground: true,
// });

MONGODB();

app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
