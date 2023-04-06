const path = require('path');
require('dotenv').config({
	path: path.resolve(__dirname, '../.env')
});

const JsonBinStrategy = require('./JsonBinStrategy');
const Service = require('./Service');

let strategy = process.env.STATS_STRATEGY || 'JSON_STRATEGY';
const delay = process.env.STATS_UPDATE_DELAY_SECONDS;

if (strategy === 'JSON_STRATEGY') {
	strategy = new JsonBinStrategy({
		jsonUrl: process.env.STATS_JSON_STRATEGY_URL,
		rcHost: process.env.RC_HOST,
		rcUserId: process.env.RC_USER_ID,
		rcToken: process.env.RC_PERSONAL_ACCESS_TOKEN,
	}) 
}

if (strategy) {
	Service.start(strategy, delay);
}
