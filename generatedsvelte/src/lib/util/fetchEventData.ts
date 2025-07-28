import * as fs from 'fs';
import * as path from 'path';
const EVENT_DATA_URL = import.meta.env.VITE_EVENT_DATA_URL;
const rootDir = path.resolve(process.cwd(), '../');
const outputFileDir = path.join(rootDir, '/build/eventData.js');
const maxRetries = 3;
let validResponse = false;

export const fetchEventData = async () => {
    const res = await fetch(EVENT_DATA_URL, {
        method: 'GET',
        headers: {
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
        const jsonData = JSON.stringify(data);
        fs.writeFileSync(outputFileDir, `export const eventData = ${jsonData}`);
    } else {
        fs.writeFileSync(
            outputFileDir,
            `export const eventData = {
                event: {
                    title: 'GSoC Alumni Summit 2025',
                    meetlink: 'https://meet.google.com/yfm-sfvp-svw',
                    time_and_date: {
                        start: '2025-03-27T16:30:00+05:30',
                        end: '2025-03-27T23:30:00+05:30'
                    },
                    location: 'Online',
                    ticket: 'Community Ticket Free',
                    Overview:
                        "Join us in the 2025 of our GSoC Alumni Summit! This will be our 9th year participating in GSoC, and we'll take the opportunity to bring past contributors and students to share their experiences in this virtual event - with an intro by our own founder and project leader, Gabriel Engel.",
                    sessions: [
                        {
                            start_time: '16:30',
                            end_time: '16:50',
                            title: 'Welcome to Rocket.Chat Alumni Summit 2025!',
                            speaker: 'Felipe/Gabriel Engel/Sing Li',
                            duration: 20,
                            yt_link: ''
                        },
                        {
                            start_time: '16:50',
                            end_time: '17:05',
                            title: 'Building a Global Network through GSoC.',
                            speaker: 'Dhruv Jain',
                            duration: 15,
                            yt_link: ''
                        },
                        {
                            start_time: '17:05',
                            end_time: '17:20',
                            title: 'How to Write a Winning GSoC Proposal: Insider Tips from Alumni',
                            speaker: 'Maria Khelli',
                            duration: 15,
                            yt_link: ''
                        },
                        {
                            start_time: '17:20',
                            end_time: '17:35',
                            title: 'Communication, the Most Important Aspect of GSoC',
                            speaker: 'Yuriko Kikuchi',
                            duration: 15,
                            yt_link: ''
                        },
                        {
                            start_time: '17:35',
                            end_time: '17:50',
                            title: 'Break',
                            speaker: '',
                            duration: 15,
                            yt_link: ''
                        },
                        {
                            start_time: '17:50',
                            end_time: '18:05',
                            title: 'Maximizing Your GSoC Journey: From a Great Proposal to Real-World Impact',
                            speaker: 'Abhinav Kumar',
                            duration: 15,
                            description: ''
                        },
                        {
                            start_time: '18:05',
                            end_time: '18:20',
                            title: '(Not informed yet)',
                            speaker: 'Aditya Singh',
                            duration: 15,
                            description: ''
                        },
                        {
                            start_time: '18:20',
                            end_time: '18:35',
                            title: 'How Open Source Opens Doors to Endless Opportunities',
                            speaker: 'Mustafa Khan',
                            duration: 15,
                            description: ''
                        },
                        		speakers: [
			{
				name: 'Gabrial Engel',
				bio: 'Founder of Rocket.Chat.',
				image: 'https://open.rocket.chat/avatar/gabriel.engel',
				more: 'Creating the platform for human collaboration over the Internet, powered by the global open source community.',
				social: [
					{
						github: 'https://github.com/engelgabriel'
					},
					{
						email: 'gabriel.engel@rocket.chat'
					},
					{
						twitter: 'https://twitter.com/gabriel_engel'
					},
					{
						linkedin: 'https://br.linkedin.com/in/gabrielengel'
					}
				]
			},
			{
				name: 'Sing Li',
				bio: 'Community Guide',
				image: 'https://open.rocket.chat/avatar/sing.li',
				more: 'Creating the platform for human collaboration over the Internet, powered by the global open source community.',
				social: [
					{
						github: 'https://github.com/Sing-Li'
					},
					{
						email: 'sing.li@rocket.chat'
					},
					{
						twitter: 'https://github.com/Sing-Li'
					},
					{
						linkedin: 'https://www.linkedin.com/in/sing-li-119716139'
					}
				]
			},
			{
				name: 'Maria Khelli',
				bio: "Software engineer at a Singapore start-up | GSoC '24 @ Rocket.Chat | Part of NUS Overseas College (Singapore) & Computer Science ITB (Indonesia)",
				image:
					'https://res.cloudinary.com/djqceuwlx/image/upload/v1742138023/gsoc-2025/alumni-summit/mutju7ikhxaxcqhwiweq.jpg',
				more: "Hi, I'm a girl from Indonesia who is keen to code. Currently working as a Software Engineer Lead in a maritime start-up based in Singapore and Korea :)",
				social: [
					{
						github: ''
					},
					{
						email: '13520115@std.stei.itb.ac.id'
					},
					{
						twitter: ''
					},
					{
						linkedin: 'https://www.linkedin.com/in/khelli07/'
					}
				]
			},
			{
				name: 'Yuriko Kikuchi',
				bio: "Software Engineer / Master's student in Information Science",
				image: 'https://open.rocket.chat/avatar/yuriko.kikuchi',
				more: "I am deeply passionate about computer science, committed to using technology to solve people's problems and generate happiness. Continuously working and learning to fulfill this mission.",
				social: [
					{
						github: ''
					},
					{
						email: 'ykikuchi410@gmail.com'
					},
					{
						twitter: ''
					},
					{
						linkedin: 'https://www.linkedin.com/in/yuriko-kikuchi/'
					}
				]
			},
			{
				name: 'Henit Chobisa',
				bio: 'Software Engineer at Plane | Gitpod Hero | ex-Junior Devrel at Apache Devlake.',
				image:
					'https://res.cloudinary.com/djqceuwlx/image/upload/v1742806946/gsoc-2025/alumni-summit/qvedqwxaegtc8k47arfc.png',
				more: "Hii I'm Henit Chobisa, I'm a Rocket.Chat GSOC Alumni from 2023. Currently working as a Software Engineer at Plane. I'm a Gitpod Hero and also have worked as a Junior Devrel at Apache Devlake.",
				social: [
					{
						github: ''
					},
					{
						email: ''
					},
					{
						twitter: ''
					},
					{
						linkedin: ''
					}
				]
			}
		]
	}
};`
        );
    }
};


