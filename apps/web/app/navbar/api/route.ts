import faunadb from "faunadb";
import { NextResponse } from "next/server";

const secret = process.env.FAUNADB_SECRET;
const q = faunadb.query;
const client = new faunadb.Client({ secret });

export async function GET(request: Request) {
  try {
    const dbs: { data: object } = await client
      .query(q.Get(q.Ref(q.Collection("User"), "1")))
      .then((ret) => {
        return ret ? ret : { data: null };
      })
      .catch((err) =>
        console.error(
          "Error: [%s] %s: %s",
          err.name,
          err.message,
          err.errors()[0].description
        )
      );
    console.log(dbs);
    return NextResponse.json(dbs.data);
  } catch (e) {
    return NextResponse.json({ error: e.message });
  }
}
