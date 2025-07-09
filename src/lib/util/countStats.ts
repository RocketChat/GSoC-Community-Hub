import * as fs from 'fs';
import * as path from 'path';

const URL = import.meta.env.VITE_URL;
const USER_TOKEN = import.meta.env.VITE_USER_TOKEN;
const USERID = import.meta.env.VITE_USERID;
const rootDir = path.resolve(process.cwd(), './');
const outputFileDir = path.join(rootDir, '/src/build/stats.js');
const maxRetries = 3;
let validResponse = false;

export const fetchStats = async () => {
	const res = await fetch(URL, {
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
		console.log(res);
		const data = await res.json();
		const jsonData = JSON.stringify(data);
		fs.writeFileSync(outputFileDir, `export const data = ${jsonData}`);
	} else {
		fs.writeFileSync(
			outputFileDir,
			`export const data = {"statistics":[{"totalUsers":388388,
                "totalMessages":12828288, "onlineUsers":802 }]}`
		);
	}
};
