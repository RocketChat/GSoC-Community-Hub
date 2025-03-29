<script lang="ts">
  import { onMount } from 'svelte';
  import { brand, menutree } from '$build/menutree';
  import EventPoster from '$lib/components/eventposter/EventPoster.svelte';
  import Menubar from '$lib/components/menubar/Menubar.svelte';
  import eventData from '$data/gsoc_alumni_summit_2025.json';
</script>

<svelte:head>
  <title>{eventData.event.title} - {brand}</title>
</svelte:head>

<main>
  <Menubar {brand} {menutree} />
  <EventPoster {eventData} />
</main> 