```svelte
<script>
    import DiscordStatscounter from '$lib/components/statscounters/DiscordStatscounter.svelte';

    const data = {
        statistics: [
            {
                totalUsers: 5230,
                totalMessages: 158239,
                onlineUsers: 420
            }
        ]
    };

    const stats = data.statistics[0];

    const discordCounters = [
        { max: stats.totalUsers, label: 'Discord Users' },
        { max: stats.totalMessages, label: 'Discord Messages' },
        { max: stats.onlineUsers, label: 'Discord Online' }
    ];
</script>

<main>
    <DiscordStatscounter {discordCounters} />
</main>

```