// // routes/users.routes.ts
// import { fql, ServiceError, type DocumentT } from 'fauna';
// import { faunaClient } from '../../../../fauna/fauna-client';
// import { Request, Response, Router, NextFunction } from 'express';
// import { User } from '../../../../models/user.model';

// import {  Client,query as q } from 'faunadb';



// const router = Router();

// // Project User document fields for consistent responses.
// const userResponse = fql`
//   user {
//     id,
//     name,
//     email
//   }
// `;

// /**
//  * Create a new user.
//  * @route {POST} /users
//  * @bodyparam name
//  * @bodyparam email
//  * @returns User
//  */
// router.post(
//   '/users',

//   async (req: Request, res: Response, next: NextFunction) => {
//     // Extract fields from the request body.
//     const { name, email } = req.body;

//     try {
      
//       const user: User = {
//         name,
//         email
//       };
//       const doesCollectionExist = await faunaClient.query(
//         q.Exists(q.Collection('User'))
//       );
      
//       console.log("Does the 'User' collection exist?", doesCollectionExist);
//       if(!doesCollectionExist){
//         await faunaClient.query(
//           q.CreateCollection({ name: 'User' })
//         );
//       }
  
//       const response = await faunaClient.query(
//         q.Create(
//           q.Collection('User'),
//           { data: user },
//         )
//       );
 

      
//       console.log("User created:", response);
//       return res.status(201).send(response);

//     } catch (error: any) {
//       if (error instanceof ServiceError) {
//         if (error.code === 'invalid_query') {
//           return res.status(400).send({
//             message:
//               'Unable to create user, please check that the fields in your request body are valid.',
//           });
//         } else if (error.code === 'constraint_failure') {
//           return res.status(409).send({ message: 'A user with that email already exists.' });
//         }
//       }
//       next(error);
//     }
//   }
// );

// /**
//  * Get a user by id.
//  * @route {GET} /users/:id
//  * @param id
//  * @returns User
//  */
// router.get(
//   '/users/:id',
//   async (req: Request, res: Response, next: NextFunction) => {
//     const { id } = req.params;
//     console.log("id",id)

//     try {
//       const response: any = await faunaClient.query(
//         q.Get(q.Ref(q.Collection('User'), id))
//       );

//       console.log("response",response)
//       const userWithId = {
//          id: response.ref.id,
//         name: response.data.name,
//         email: response.data.email
//       };
    
//       return res.status(200).send(userWithId);

     
//     } catch (error: unknown) {
//       if (error instanceof ServiceError) {
//         if (error.code === 'invalid_argument') {
//           return res.status(400).send({ message: `Invalid id '${id}' provided.` });
//         } else if (error.code === 'document_not_found') {
//           return res.status(404).send({ message: `No user with id '${id}' exists.` });
//         }
//       }
//       next(error);
//     }
//   }
// );



// // 408074759879787008



// export default router;


// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { faunaClient } from '../../../fauna/fauna-client';  // Adjust import as per your structure
import { query as q } from 'faunadb';
import bcrypt from 'bcrypt';

// Define the POST handler for creating a new user
export async function POST(req: NextRequest) {
  const { username, email ,password} = await req.json(); // Extract fields from request body
  console.log("name",username);
  console.log("email",email);

  try {
    const doesCollectionExist = await faunaClient.query(
      q.Exists(q.Collection('User'))
    );
    console.log("**********");

    if (!doesCollectionExist) {
        console.log("here");
      await faunaClient.query(
        q.CreateCollection({ name: 'User' })
      );
    }else{
        console.log("exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, email,hashedPassword };

    const response = await faunaClient.query(
      q.Create(q.Collection('User'), { data: user })
    );
   
    console.log("User created:", response);
    return NextResponse.json(response, { status: 201 });
  } catch (error: any) {
    console.error("FaunaDB Error:", error);
    // Handle Fauna service errors
    if (error.requestResult?.statusCode === 400) {
      return NextResponse.json(
        { message: 'Invalid fields in the request body' },
        { status: 400 }
      );
    } else if (error.requestResult?.statusCode === 409) {
      return NextResponse.json(
        { message: 'A user with that email already exists' },
        { status: 409 }
      );
    }
    // Generic error
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}

