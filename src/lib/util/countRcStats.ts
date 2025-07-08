import * as fs from "fs";
import * as path from "path";
import {RC_URL , RC_USER_TOKEN, RC_USER_ID} from "../../build/rcServerInfo.js"

const rootDir = path.resolve(process.cwd(), './');
const outputFileDir = path.join(rootDir, '/src/build/rcstats.js');
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
            console.log("Called");
            
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