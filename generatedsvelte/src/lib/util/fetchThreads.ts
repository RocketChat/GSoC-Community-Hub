import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const ROOM_ID = import.meta.env.VITE_ROOM_ID;
const THREAD_COUNT = 5;
const THREADS_URL = `${BASE_URL}/api/v1/chat.getThreadsList?count=${THREAD_COUNT}&sort=%7B%22tcount%22%3A-1%7D&rid=${ROOM_ID}`;
const USER_TOKEN = import.meta.env.VITE_USER_TOKEN;
const USERID = import.meta.env.VITE_USERID;
const rootDir = path.resolve(process.cwd(), '../');
const outputFileDir = path.join(rootDir, '/build/threadsList.js');
const maxRetries = 3;
let validResponse = false;

export interface Threads {
    id: string;
    message: string;
    tcount: number;
    timestamp: string;
    username: string;
    name: string;
    time_last_replied: string;
}

let threads : Array<Threads> = [];
export const fetchThreads = async () => {
    try{
        const res = await fetch(THREADS_URL, {
            method: 'GET',
            headers: {
                'X-Auth-Token': USER_TOKEN,
                'X-User-Id': USERID,
                accept: 'application/json'
            }
        });
    
        for (let retryCount = 1; retryCount <= maxRetries; retryCount++) {
            if (res.ok) {
                validResponse = true;
                break;
            }
        }
        if (validResponse) {
            const data = await res.json(); 
            for(const thread in data["threads"]){
                const threadObj = {
                    id: data["threads"][thread]["_id"],
                    message: data["threads"][thread]["msg"],
                    tcount: data["threads"][thread]["tcount"],
                    timestamp: data["threads"][thread]["ts"],
                    username: data["threads"][thread]["u"]["username"],
                    name: data["threads"][thread]["u"]["name"],
                    time_last_replied: data["threads"][thread]["tlm"]
                }
                threads.push(threadObj);
            }
            fs.writeFileSync(outputFileDir, `export const threadsList = ${JSON.stringify(threads)}`)
        } else {
            fs.writeFileSync(
                outputFileDir,
                `export const threadsList = [{"message":" ","timestamp":" ", "tcount" : " ",
                "username":" ","name":" ","time_last_replied":" "}] `
            );
        }
    } catch (error){
        console.error(error);
    }
};