<script lang="ts">
 import { authenticated } from "$lib/shared.svelte";
 import { initKeycloak } from "$lib/auth/keycloakAuth";
</script>

{#await initKeycloak()}
    {#if authenticated.value}
        <slot></slot>
    {/if}
{/await}