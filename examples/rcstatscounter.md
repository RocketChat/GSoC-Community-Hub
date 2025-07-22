```svelte
<script>
	import RCStatscounter from '$lib/components/statscounters/RCStatscounter.svelte';

    const data = {
            statistics: [
                {
                    totalUsers: 100000,
                    totalMessages: 8008500,
                    onlineUsers: 10000
                }
            ]
        };

    const rcstats = data.statistics[0];

	const rcCounters = [
        { max: stats.totalUsers, label: 'Rocket Chat Users' },
        { max: stats.totalMessages, label: 'Rocket Chat Messages' },
        { max: stats.onlineUsers, label: 'Rocket Chat Online' }
    ];

</script>

<main>
	<RCStatscounter {rcCounters} />
</main>
```