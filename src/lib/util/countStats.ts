import * as fs from "fs";
import * as path from "path";

const rootDir = path.resolve(process.cwd(), './');
const outputFileDir = path.join(rootDir, '/src/build/stats.js');

const fetchStats = async () => {
        const res = await fetch("https://apiexplorer.support.rocket.chat/api/v1/statistics.list", {
        method: 'GET',
        headers: {
            'X-Auth-Token':"ReFnX4E6DWjzKv1PFqrTD3IAHxYKQ5hqAL9PrgRJ4yx",
            'X-User-Id': "4M9iA94fqvpo3Ekm8",
            'accept': 'application/json'
            },
        });
        if(res.ok){
            const data = await res.json();
            const jsonData = JSON.stringify(data);
            fs.writeFileSync(outputFileDir, `export const data = ${jsonData}`);
        }else{
            fs.writeFileSync(outputFileDir, `export const data = {"statistics":[{"totalUsers":388388,
                "totalMessages":12828288, "onlineUsers":802 }]}`);
        }
}

fetchStats();


