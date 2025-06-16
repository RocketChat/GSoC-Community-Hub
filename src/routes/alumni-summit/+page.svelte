<script lang="ts">
   import { brand } from "../../build/brand";
 import { menutree } from "../../build/menutree";
 import { eventData } from "../../build/eventData";
  import Menubar from '$lib/components/menubar/Menubar.svelte';
import EventPoster from '$lib/components/eventposter/EventPoster.svelte';
</script>

<Menubar {brand} {menutree} />
<EventPoster {eventData} />
