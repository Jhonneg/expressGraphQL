import express, { json } from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { loadFilesSync } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";

const typesArray = loadFilesSync("**/*", {
  extensions: ["gql"],
});

const resolversArray = loadFilesSync("**/*", {
  extensions: ["resolvers.js"],
});

(async () => {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start();

  app.use(cors());
  app.use(json());

  app.use("/graphql", expressMiddleware(server));

  app.listen(3000, () => {
    console.log("Running GraphQL server...");
  });
})();
