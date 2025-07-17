#Leaderboard Component

## Description
The `Leaderboard` Component is a component the displays the individual contributors to a given organization's repository, ranked by metrics such as number of `mergedPRs` , `openPRs` and `issues`. The component is an attempt to gamify contributons to the organization, thereby promoting participation.

## Usage

First, the organization sets up and deploys an [Open-Source-Contributon Leaderboard](https://github.com/RocketChat/Opensource-Contribution-Leaderboard) to retrieve the respective API endpoints for integration with the Rocket.Chat application.

The `.env` variable  `VITE_LEADERBOARD_URL` will contain the api endpoint for retrieving contributor stats in the format : `${BASE_URL}/api/contributor` e.g `https://gsoc.rocket.chat/api/contributor` 


## Props

| Prop Name  | Type          | Default | Description                     |
|------------|---------------|---------|---------------------------------|
| `contributorDataSortM`  | `Array<Object>`      | `[]`    | Contributor data ranked by number of merged PRs |
| `contributorDataSortP` | `Array<Object>`| `[]`    | Contributor data ranked by number of Open PRs     |
| `contributorDataSortI`   | `Array<Object>`| `[]`    | Contributor data ranked by number of issues |


## Example

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

This example is available for build and test at [Examples](../examples/leaderboard.md)