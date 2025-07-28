import * as fs from "fs";
import * as path from "path";
const RC_URL = import.meta.env.RC_URL;
const RC_USER_TOKEN = import.meta.env.RC_USER_TOKEN;
const RC_USER_ID = import.meta.env.RC_USER_ID;
const rootDir = path.resolve(process.cwd(), '../');
const outputFileDir = path.join(rootDir, '/build/rcstats.js');
const maxRetries = 3;
let validResponse = false;

export const fetchRcStats = async () => {
    const headers = {
            'X-Auth-Token':RC_USER_TOKEN,
            'X-User-Id': RC_USER_ID,
            'accept': 'application/json'
        };
    
    const res = await fetch(`${RC_URL}/api/v1/statistics`,{
        method:"GET",
        headers:headers
    });
    for(let retryCount = 1; retryCount <= maxRetries; retryCount++){
            if(res.ok){
                validResponse = true; break;
            }
        }
    
        if(validResponse){
            const data = await res.json();
            const totalMessages = data.totalMessages;
            const totalUsers = data.totalUsers;
            const activeUsers = data.activeUsers;
            fs.writeFileSync(outputFileDir, `export const data = {"statistics":[{"onlineUsers":${activeUsers},"totalUsers":${totalUsers},"totalMessages":${totalMessages}}]}`);
        }else{
            fs.writeFileSync(outputFileDir, `export const data = {"statistics":[{"totalUsers":100000,
                "totalMessages":8008500, "onlineUsers":10000 }]}`);
        }
}