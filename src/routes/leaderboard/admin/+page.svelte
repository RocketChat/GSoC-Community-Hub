<script lang="ts">
   import { brand } from "$build/brand";
 import { menutree } from "$build/menutree";
  import Menubar from '$lib/components/menubar/Menubar.svelte';
  import Admin from "$lib/components/admin/Admin.svelte";
</script>

<Menubar {brand} {menutree}  />
<Admin />