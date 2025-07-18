```svelte
<script>
	import Statscounters from '$lib/components/statscounters/Statscounters.svelte';

	const data = {
		statistics: [
			{
				totalUsers: 388388,
				totalMessages: 12828288,
				onlineUsers: 802
			}
		]
	};

	const stats = data.statistics[0];

	const counters = [
		{ max: stats.totalUsers, label: 'Users' },
		{ max: stats.totalMessages, label: 'Messages' },
		{ max: stats.onlineUsers, label: 'Online' }
	];
</script>

<main>
	<Statscounters {counters} />
</main>
```
