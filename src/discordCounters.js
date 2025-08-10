import {data} from "../build/discordstats.js";

const stats = data.statistics;
export const discordCounters = [ { max: stats[0].totalUsers, label: "Discord Users"}, 
    {max: stats[0].totalMessages, label: "Discord Messages"}, {max: stats[0].onlineUsers, label: "Discord Online"}];
