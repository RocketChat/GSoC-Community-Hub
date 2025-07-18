```svelte
<script>
	const herotitle = "Welcome to our <b style='color:red'>community</b>";
	const herosub =
		"Let's dream, share, and collaborate in shaping the future of the Rocket.Chat ecosystem together !!";
</script>

use Herounit from $lib/components/herounit/Herounit.svelte get title get subtitle

<main>
	<Herounit title={herotitle} subtitle={herosub} />
</main>
```
