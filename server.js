import express from "express";
import { buildSchema } from "graphql";
import { createYoga } from "graphql-yoga";

const schema = buildSchema(`
  type Query {
   description: String
   price:Float
}
`);


const app = express();

app.use(
  "/graphql",
  createYoga({
    schema: schema,
  })
);

app.listen(3000, () => {
  console.log("Running GraphQL server...");
});
