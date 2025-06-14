<script lang="ts">
   import { brand } from "../../build/brand";
 import { menutree } from "../../build/menutree";
 import { contributorData } from "$build/contributorData";
 import { loginData } from "$build/loginData";
  import Menubar from '$lib/components/menubar/Menubar.svelte';
import Leaderboard from "$lib/components/leaderboard/Leaderboard.svelte";
</script>

<Menubar {brand} {menutree} {loginData} />
<Leaderboard {contributorData} />