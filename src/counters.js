import { data } from '../build/stats';
// Statscounters data from CRM
const stats = data.statistics;
export const counters = [
	{ max: stats[0].totalUsers, label: 'Users' },
	{ max: stats[0].totalMessages, label: 'Messages' },
	{ max: stats[0].onlineUsers, label: 'Online' }
];
