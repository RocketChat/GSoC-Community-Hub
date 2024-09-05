import { Client } from "faunadb";

// Create a new Fauna client with the secret and endpoint
// from the environment variables. The endpoint defaults to
// https://db.fauna.com if it is not set in the environment.
// This client will be used across the application to interact
// with Fauna.
export const faunaClient = new Client({
  secret: process.env.FAUNADB_KEY||'secret',
  domain: "localhost",
  scheme:'http',
  port:8443
});
