import express from "express";
import { ApolloServer } from "apollo-server-express";
import "babel-polyfill";

import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";

import schema from "./graphql";
import SERVICE from "./common/config";

const environment = process.env.NODE_ENV || "production";
const config = SERVICE.configurations.serviceThree[environment];

const app = express();
const apollo = new ApolloServer({ schema });

app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

apollo.applyMiddleware({ app });

app.listen({ port: config.port }, () =>
  console.log(
    "[",
    new Date(),
    "]",
    `🚀 Server ready at http://localhost:${config.port}${apollo.graphqlPath}`
  )
);

export default app;
