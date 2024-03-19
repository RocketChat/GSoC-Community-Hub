import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';
// const path = require("path");
// const dotenv = require("dotenv");
// const fs = require("fs");
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
  const payloadConfigPath = dotenv.config({ path: `${driveLetter}:/${input}/.env` }).parsed.PAYLOAD_CONFIG_PATH;

  //for windows
  if (stdin.startsWith("/mnt")) {
    return `${driveLetter}:${input}/${payloadConfigPath}`;
  }

  // Otherwise, join the stdin with the PAYLOAD_CONFIG_PATH and return it
  return `${stdin}/${dotenv.config({ path: envPath }).parsed.PAYLOAD_CONFIG_PATH}`;
}

// Read from stdin
const stdin = fs.readFileSync(process.stdin.fd, 'utf-8').trim(); // Ensure to trim any leading/trailing whitespace

// Call the loadEnv function and store the result
const payloadConfigPath = loadEnv(stdin);

// Output the PAYLOAD_CONFIG_PATH
console.log(payloadConfigPath);