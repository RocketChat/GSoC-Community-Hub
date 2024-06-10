const axios = require('axios');
const Strategy = require('./Strategy');

class JsonBinStrategy extends Strategy {
	constructor({
		jsonUrl,
		rcHost,
		rcToken,
		rcUserId,
		headers = {},
		attributes
	}){
		super({
			rcHost,
			rcToken,
			rcUserId,
			attributes
		});
		this.jsonUrl = jsonUrl;
		this.headers = headers;
	}

	async get() {
		return (await axios.get(this.jsonUrl)).data;
	}

	async save() {
		const stats = await this.fetchStatsFromRC();
		
		const response = await axios.post(this.jsonUrl, stats, {
			headers: this.headers,
		});
		await super.save();
	
		return response.data;
	}
}

module.exports = JsonBinStrategy;
