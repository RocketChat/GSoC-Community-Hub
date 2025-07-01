<script lang="ts">
   import { brand } from "../../build/brand";
 import { menutree } from "../../build/menutree";
  import Menubar from '$lib/components/menubar/Menubar.svelte';
import Jitsi from '$lib/components/jitsi/Jitsi.svelte';
</script>

<Menubar {brand} {menutree} />
<Jitsi />
