const Event = require('../../structures/Event');

module.exports = class ShardReady extends Event {
	constructor(...args) {
		super(...args);
	}

	async run(w) {
		const i = parseInt(this.client.shard.ids, 10) + 1;
		this.client.log(`[Shard ${i}] Warning: ${w}...`);
	}
};