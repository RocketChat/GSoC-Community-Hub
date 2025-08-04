<script lang="ts">
   import { brand } from "../../../../src/brand";
 import { menutree } from "../../../../src/menutree";
  import Menubar from '$lib/components/menubar/Menubar.svelte';
import Jitsi from '$lib/components/jitsi/Jitsi.svelte';
</script>

<Menubar {brand} {menutree} />
<Jitsi />
