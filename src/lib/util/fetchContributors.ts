import * as fs from 'fs';
import * as path from 'path';
import { dummyData } from '$build/dummyContribData';

export interface Contributor {
	avatar: string;
	username: string;
	openPRsNumber: number;
	mergedPRsNumber: number;
	issuesNumber: number;
}

export interface LeaderboardAdminData {
	avatar: string;
	username: string;
}

const LEADERBOARD_URL = import.meta.env.VITE_LEADERBOARD_URL;
const rootDir = path.resolve(process.cwd(), './');
const defaultFileDir = path.join(rootDir, '/src/build/contributorDataSortM.js');
const contributorDataSortPDir = path.join(rootDir, '/src/build/contributorDataSortP.js');
const contributorDataSortIDir = path.join(rootDir, '/src/build/contributorDataSortI.js');
let outputFileDir = defaultFileDir;
let outputName = 'contributorDataSortM';

//sort them in all three ways at build time, store all data.

export function sortContributors(contributorData: any[], param?: string) {
	let pref1: string, pref2: string, pref3: string;
	if (param === 'p') {
		pref1 = 'openPRsNumber';
		pref2 = 'mergedPRsNumber';
		pref3 = 'issuesNumber';
		outputFileDir = contributorDataSortPDir;
		outputName = 'contributorDataSortP';
	} else if (param === 'i') {
		pref1 = 'issuesNumber';
		pref2 = 'mergedPRsNumber';
		pref3 = 'openPRsNumber';
		outputFileDir = contributorDataSortIDir;
		outputName = 'contributorDataSortI';
	} else {
		pref1 = 'mergedPRsNumber';
		pref2 = 'openPRsNumber';
		pref3 = 'issuesNumber';
	}
	contributorData = contributorData.sort((a, b) => {
		if (a[pref1] < b[pref1]) {
			return 1;
		}
		if (a[pref1] > b[pref1]) {
			return -1;
		}
		if (a[pref2] < b[pref2]) {
			return 1;
		}
		if (a[pref2] > b[pref2]) {
			return -1;
		}
		if (a[pref3] < b[pref3]) {
			return 1;
		}
		if (a[pref3] > b[pref3]) {
			return -1;
		}
		return 0;
	});
	fs.writeFileSync(
		outputFileDir,
		`export const ${outputName} = ${JSON.stringify(contributorData)}`
	);
}

let data: Array<Contributor> = [];

export const fetchContributors = async () => {
	try {
		const req = await fetch(LEADERBOARD_URL, {
			method: 'GET'
		});

		if (req.ok) {
			const res = await req.json();
			for (const contrib in res) {
				const contribObj = {
					avatar: res[contrib].avatarUrl,
					username: contrib,
					openPRsNumber: res[contrib].openPRsNumber,
					mergedPRsNumber: res[contrib].mergedPRsNumber,
					issuesNumber: res[contrib].issuesNumber
				};
				data.push(contribObj);
			}
			sortContributors(data);
			sortContributors(data, 'p');
			sortContributors(data, 'i');
		} else {
			fs.writeFileSync(outputFileDir, `export const contributorData = ${dummyData}`);
		}
	} catch (error) {
		console.error(error);
	}
};
