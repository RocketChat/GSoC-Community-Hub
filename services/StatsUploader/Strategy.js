const axios = require('axios');
/**
 * A Strategy defines methods to get and save data from a source.
 */
class Strategy {
	constructor({
		rcHost,
		rcUserId,
		rcToken,
		attributes,
	}) {
		this.rcHost = rcHost;
		this.rcUserId = rcUserId;
		this.rcToken = rcToken;
		this.attributes = attributes || ['totalUsers', 'totalMessages', 'onlineUsers'];
	}
	async save(){
		console.log(`[${new Date().toISOString()}] Saved`)
	}
	async get(){}
	async fetchStatsFromRC(){
		const response = await axios.get(`api/v1/statistics`, {
			baseURL: this.rcHost,
			headers: {
				'X-Auth-Token': this.rcToken,
				'X-User-Id': this.rcUserId
			}
		})
		const stats = response.data;
		const data = {
			lastPublished: new Date(),
		};
		this.attributes.forEach((attr) => {
			data[attr] = stats[attr];
		});
		return data;
	}
}

module.exports = Strategy;
