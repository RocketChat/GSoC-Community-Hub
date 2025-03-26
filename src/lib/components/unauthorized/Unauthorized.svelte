<script module>
</script>

<script lang="ts">
	import { goto } from '$app/navigation';

	import { authenticated, user } from '$lib/store.svelte';

	import { onMount } from 'svelte';

	let { unauthorizedText } = $props();
	onMount(() => {
		if (authenticated.value && user.role === 'admin') {
			goto('/');
		}
	});
</script>

<div class="unauthorized-container">
	<div class="unauthorized-div">
		{unauthorizedText}
	</div>
</div>

<style>
	.unauthorized-container {
		width: 100%;
		height: 90vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.unauthorized-div {
		text-align: center;
		background: #f5455c;
		width: 100%;
	}
</style>
