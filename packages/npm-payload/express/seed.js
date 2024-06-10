import mongoose from 'mongoose';

import {connectDB} from './db.js';


import {pages} from './model/page.js';
import {navbars} from './model/navbar.js'
import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';

function loadEnv(stdin) {
  // Attempt to load .env file from the provided path
  const envPath = path.join(stdin, '.env');
  if (envPath) {
    dotenv.config({ path: envPath });
  } else {
    const cwdPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(cwdPath)) {
      dotenv.config({
        path: cwdPath,
      });
    }
  }

  const driveLetter = stdin.charAt(5).toUpperCase(); // Assuming the drive letter is the character after "mnt/"
  const input = stdin.substring(6);
  const MONGODB_URI = dotenv.config({ path: `${driveLetter}:/${input}/.env` }).parsed.MONGODB_URI;

  //for windows
  if (stdin.startsWith("/mnt")) {
    return MONGODB_URI;
  }

  // Otherwise, join the stdin with the PAYLOAD_CONFIG_PATH and return it
  return `${dotenv.config({ path: envPath }).parsed.MONGODB_URI}`;
}

const seedDb = async (stdin) => {

  const MONGODB_URI = loadEnv(stdin)

  await connectDB(MONGODB_URI) 
// const page = new pages({
//     title: "db2",
//     content: "db2",
//   });

//   await page.save();
const nav = new navbars({
  first: "link1",
  second: "link2",
});

await nav.save();

};

const stdin = fs.readFileSync(process.stdin.fd, 'utf-8').trim(); // Ensure to trim any leading/trailing whitespace

seedDb(stdin)
  .then(() => {
    console.log(`items added`);
    mongoose.connection.close();
  })

  .catch((error) => {
    console.log(error);
  });
