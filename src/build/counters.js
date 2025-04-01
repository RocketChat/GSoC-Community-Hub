import { fetchStats } from "../compiler/scripts/countStats";
const [ Users, Messages, onlineUsers ] = await fetchStats();
// Statscounters data from CRM
export const counters = [ { max: Users, label: "Users"}, 
    {max: Messages, label: "Messages"}, {max: onlineUsers, label: "Online"}];
