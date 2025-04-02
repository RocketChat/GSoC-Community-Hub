import { fetchStats } from "$lib/util/countStats";
const {totalUsers, totalMessages, onlineUsers } = await fetchStats() ?? {totalUsers: 388388, totalMessages : 12828288, onlineUsers : 802};
// Statscounters data from CRM
export const counters = [ { max: totalUsers, label: "Users"}, 
    {max: totalMessages, label: "Messages"}, {max: onlineUsers, label: "Online"}];
