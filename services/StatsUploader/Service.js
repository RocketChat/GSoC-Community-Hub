class Service {
	/**
	 * @param {Strategy} strategy 
	 * @param {number} delay Delay in seconds. Default is 3600 (1 hour)
	 */
	async start(strategy, delay = 3600){
		const task = async () => {
			try {
				await strategy.save()
			} catch (e) {
				console.error(e);
			}
		};

		task();
		this.timer = setInterval(task, delay * 1000);
	}

	stop(){
		clearInterval(this.timer);
	}
}

module.exports = new Service();
