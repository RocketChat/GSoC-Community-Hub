import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const ROOM_ID = import.meta.env.VITE_ROOM_ID.split(',');
const THREAD_COUNT = 5;
const USER_TOKEN = import.meta.env.VITE_USER_TOKEN;
const USERID = import.meta.env.VITE_USERID;
const rootDir = path.resolve(process.cwd(), '../');
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

const fetchThreads = async (room_id: string) => {
    let threads : Array<Threads> = [];
    const THREADS_URL = `${BASE_URL}/api/v1/chat.getThreadsList?count=${THREAD_COUNT}&sort=%7B%22tcount%22%3A%20-1%2C%20%22tlm%22%3A%20-1%7D&rid=${room_id.trim()}`;
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
            return threads;
        }
    } catch (error){
        console.error(error);
    }
};

export const fetchAllThreads = async () => {
    for(const id in ROOM_ID){
        let outputFileDir = path.join(rootDir, `/build/_${ROOM_ID[id].trim()}.js`);
        let threads = await fetchThreads(ROOM_ID[id]);
        fs.writeFileSync(outputFileDir, `export const _${ROOM_ID[id].trim()} = ${JSON.stringify(threads)}`);
    }
}