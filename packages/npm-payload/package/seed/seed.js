// src/seed.ts
import { getPayload } from 'payload'
// import dotenv from 'dotenv'
import { loadConfig } from '../loadConfig.ts'
// import fs from 'fs';

// dotenv.config()

export const seed = async () => {
  // take location from env
  // console.log("++++++",stdin)
  const config = await loadConfig("/home/anjy/Projects/alpha-turborepo/apps/alpha/payload.config.js")
  // console.log("#####33",config)
  const payload = await getPayload({ config })

  // const pages = await payload.create({
  //   collection: 'navbar',
  //   data: [
  //     {
  //       first: 'option1',
  //       second: 'option2',
  //     }
  //   ],
  // })

  // console.log(pages)
  // process.exit(1)
}

// const stdin = fs.readFileSync(process.stdin.fd, 'utf-8').trim();
// console.log("*****");
seed()