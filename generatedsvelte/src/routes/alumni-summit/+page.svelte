<script lang="ts">
   import { brand } from "../../../../src/brand";
 import { menutree } from "../../../../src/menutree";
 import { eventData } from "../../../../src/eventData";
  import Menubar from '$lib/components/menubar/Menubar.svelte';
import EventPoster from '$lib/components/eventposter/EventPoster.svelte';
</script>

<Menubar {brand} {menutree} />
<EventPoster {eventData} />
