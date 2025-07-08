import {data} from "./rcstats";

const stats = data.statistics;
export const rcCounters = [ { max: stats[0].totalUsers, label: "Rocket Chat Users"}, 
    {max: stats[0].totalMessages, label: "Rocket Chat Messages"}, {max: stats[0].onlineUsers, label: "Rocket Chat Online"}];
