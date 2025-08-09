import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const ROOM_ID = import.meta.env.VITE_ROOM_ID.split(',');
const ROOM_NAME = import.meta.env.VITE_ROOM_NAME.split(',');

//map room names to ids
export const ROOM_OBJ : Record<string, string> = {};
for(let i = 0; i < ROOM_NAME.length; i++){
    ROOM_OBJ[ROOM_NAME[i]] = ROOM_ID[i];
}

const THREAD_COUNT = 5;
const USER_TOKEN = import.meta.env.VITE_USER_TOKEN;
const USERID = import.meta.env.VITE_USERID;
const rootDir = path.resolve(process.cwd(), '../');
const maxRetries = 3;

let validResponse = false;

export interface Threads {
    room_name: string;
    id: string;
    message: string;
    tcount: number;
    timestamp: string;
    username: string;
    name: string;
    time_last_replied: string;
}

const fetchThreads = async (room_name: string) => {
    let threads : Array<Threads> = [];
    const THREADS_URL = `${BASE_URL}/api/v1/chat.getThreadsList?count=${THREAD_COUNT}&sort=%7B%22tcount%22%3A%20-1%2C%20%22tlm%22%3A%20-1%7D&rid=${ROOM_OBJ[room_name].trim()}`;
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
                room_name : room_name,
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
    for(const room in ROOM_NAME){
        let outputFileDir = path.join(rootDir, `/build/${ROOM_NAME[room].trim()}.js`);
        let threads = await fetchThreads(ROOM_NAME[room]);
        fs.writeFileSync(outputFileDir, `export const ${ROOM_NAME[room].trim()} = ${JSON.stringify(threads)}`);
    }
}