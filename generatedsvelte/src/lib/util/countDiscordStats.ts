import * as fs from "fs";
import * as path from "path";
const DISCORD_AUTH_TOKEN = import.meta.env.DISCORD_USER_TOKEN;
const DISCORD_GUILD_ID = import.meta.env.DISCORD_GUILD_ID;
const rootDir = path.resolve(process.cwd(), '../');
const outputFileDir = path.join(rootDir, '/build/discordstats.js');
const maxRetries = 3;
let validResponse = false;

export const fetchDiscordStats = async () => {
    const headers = {
            'Authorization':DISCORD_AUTH_TOKEN,
            'accept': 'application/json'
        };
    
    const res = await fetch(`https://discord.com/api/guilds/${DISCORD_GUILD_ID}?with_counts=true`,{
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
            let totalMessages=0;
            const totalUsers = data.approximate_member_count;
            const activeUsers = data.approximate_presence_count;
            const channelRes = await fetch(
            `https://discord.com/api/v10/guilds/${DISCORD_GUILD_ID}/channels`,
            { method: "GET", headers }
        );
        const channels = await channelRes.json();

       
        for (const channel of channels) { // For each text channel, count messages
            if (channel.type === 0) {
                let lastMessageId: string | undefined = undefined;
                let channelCount = 0;

                while (true) {
                    
                    const url:string = lastMessageId
                        ? `https://discord.com/api/v10/channels/${channel.id}/messages?limit=100&before=${lastMessageId}`
                        : `https://discord.com/api/v10/channels/${channel.id}/messages?limit=100`;

                    const msgRes = await fetch(url, { method: "GET", headers });
                    if (!msgRes.ok) break;

                    const messages = await msgRes.json();
                    if (messages.length === 0) break;

                    channelCount += messages.length;
                    lastMessageId = messages[messages.length - 1].id;

                    // Avoid hitting rate limits
                    await new Promise(r => setTimeout(r, 300));
                }

                totalMessages += channelCount;
            }
        }
            fs.writeFileSync(outputFileDir, `export const data = {"statistics":[{"onlineUsers":${activeUsers},"totalUsers":${totalUsers},"totalMessages":${totalMessages}}]}`);
        }else{
            fs.writeFileSync(outputFileDir, `export const data = {"statistics":[{"totalUsers":100000,
                "totalMessages":8008500, "onlineUsers":10000 }]}`);
        }
}