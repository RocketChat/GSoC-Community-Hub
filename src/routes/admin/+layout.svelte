<script>
	import { goto } from '$app/navigation';
	import { authenticated, keycloakInstance, user } from '$lib/store.svelte';
	import { initKeycloak } from '$lib/utils/keycloakAuth';
	import { onMount } from 'svelte';

	let { children } = $props();
	let isLoading = $state(true);
	async function checkAccess() {
		await initKeycloak(); // Ensure Keycloak is initialized before accessing the store.

		isLoading = false;

		if (user?.role !== 'admin') {
			goto('/unauthorized');
		}
	}

	onMount(checkAccess);
</script>

<div class="bg-red-400">
	<div class="bg-blue-400">
		{#if isLoading}
			<div>Loading...</div>
		{:else if user.role === 'admin'}
			{@render children()}
		{:else}
			<div>Unauthorized - Redirecting...</div>
		{/if}
	</div>
</div>
