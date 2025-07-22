<script lang="ts">
   import { brand } from "../../../../src/brand";
 import { menutree } from "../../../../src/menutree";
 import { contributorDataSortM } from "../../../../src/contributorDataSortM";
 import { contributorDataSortI } from "../../../../src/contributorDataSortI";
 import { contributorDataSortP } from "../../../../src/contributorDataSortP";
 import { lastUpdated } from "../../../../src/lastUpdated";
  import Menubar from '$lib/components/menubar/Menubar.svelte';
import Leaderboard from '$lib/components/leaderboard/Leaderboard.svelte';
</script>

<Menubar {brand} {menutree} />
<Leaderboard {contributorDataSortM} {contributorDataSortI} {contributorDataSortP} {lastUpdated} />
