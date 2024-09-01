import express from "express";
import { createYoga } from "graphql-yoga";
import { makeExecutableSchema } from "@graphql-tools/schema";

const schemaText = `
  type Query {
    products: [Product]
    order: [Order]
}
`;

const schema = makeExecutableSchema({
  typeDefs: [schemaText],
});

const app = express();

app.use(
  "/graphql",
  createYoga({
    schema: schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Running GraphQL server...");
});
