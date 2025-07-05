<script lang="ts">
	import { brand } from '$build/brand';
	import { menutree } from '$build/menutree';
	import { contributorDataSortM } from '$build/contributorDataSortM';
	import { contributorDataSortI } from '$build/contributorDataSortI';
	import { contributorDataSortP } from '$build/contributorDataSortP';
	import { lastUpdated } from '$build/lastUpdated';
	import Menubar from '$lib/components/menubar/Menubar.svelte';
	import Leaderboard from '$lib/components/leaderboard/Leaderboard.svelte';
</script>

<Menubar {brand} {menutree} />
<Leaderboard {contributorDataSortM} {contributorDataSortI} {contributorDataSortP} {lastUpdated} />
