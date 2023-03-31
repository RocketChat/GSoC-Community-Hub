import faunadb from "faunadb";
import { NextResponse } from "next/server";

const secret = process.env.FAUNADB_SECRET;
const q = faunadb.query;
const client = new faunadb.Client({ secret });

export async function GET(request: Request) {
  try {
    const dbs: { data: object } = await client.query(
      q.Map(
        // iterate each item in result
        q.Paginate(
          // make paginatable
          q.Match(
            // query index
            q.Index("user") // specify source
          )
        ),
        (ref) => q.Get(ref) // lookup each result by its reference
      )
    );
    return NextResponse.json(dbs.data);
  } catch (e) {
    return NextResponse.json({ error: e.message });
  }
}