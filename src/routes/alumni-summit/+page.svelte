<script lang="ts">
	import { brand } from '$data/brand';
	import { menutree } from '$data/menutree';
	import { eventData } from '../../../build/eventData';
	import Menubar from '$lib/components/menubar/Menubar.svelte';
	import EventPoster from '$lib/components/eventposter/EventPoster.svelte';
</script>

<Menubar {brand} {menutree} />
<EventPoster {eventData} />
