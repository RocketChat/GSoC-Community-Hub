<script lang="ts">
	import { goto } from '$app/navigation';
	import { authenticated, keycloakInstance } from '$lib/store.svelte';
	import { initKeycloak } from '$lib/utils/keycloakAuth';
	import { onMount } from 'svelte';
	onMount(async () => {
		await initKeycloak();
		if (authenticated.value) {
			goto('/');
		}
	});
</script>

<div class="flex h-screen w-full items-center justify-center">
	<button
		onclick={async () => {
			await keycloakInstance?.instance?.register();
		}}
		class="w-1/4 rounded-sm bg-secondaryColor p-2 transition-all active:scale-95"
		>register with keycloak</button
	>
</div>
