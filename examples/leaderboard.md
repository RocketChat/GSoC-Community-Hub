```agml
use Menubar from $lib/components/menubar/Menubar.svelte
use Leaderboard from $lib/components/leaderboard/Leaderboard.svelte
get brand
get menutree
get contributorDataSortM
get contributorDataSortI
get contributorDataSortP
<main>
<Menubar {brand} {menutree} />
<Leaderboard {contributorDataSortM}{contributorDataSortI} {contributorDataSortP} />
</main>
```
