import { NextRequest, NextResponse } from 'next/server';
import { faunaClient } from '../../../../fauna/fauna-client';  // Adjust the path as per your structure
import { query as q } from 'faunadb';
import bcrypt from 'bcrypt';

type UserType = {
  ref: {
    id: string;
  };
  data: {
    email: string;
    hashedPassword: string;
  };
};

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {

    //TOD: Use faunadb indexes instead of querying the whole document
    const response: { data: UserType[] } = await faunaClient.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('User'))),
        q.Lambda('ref', q.Get(q.Var('ref')))
      )
    );

    // Find user with the given email
    const user = response.data.find((user) => user.data.email === email);
    console.log("user",user)

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.data.hashedPassword);

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
    }

    // If everything is fine, return the user data (e.g., user ID)
    return NextResponse.json({ id: user.ref.id, message: 'Login successful' }, { status: 200 });
  } catch (error) {
    console.error('FaunaDB error:', error);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
