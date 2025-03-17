
<script lang="ts">
  import { brand, menutree, herotitle, herosub, leftlink, rightlink, searchactions, counters, tilelinks, stories, caption, personas, images } from '../../build/community';
  import Menubar from '$lib/components/menubar/Menubar.svelte';
import Herounit from '$lib/components/herounit/Herounit.svelte';
import Docslink from '$lib/components/docslink/Docslink.svelte';
import Searchbar from '$lib/components/searchbar/Searchbar.svelte';
import Statscounters from '$lib/components/statscounters/Statscounters.svelte';
import Simonlinktiles from '$lib/components/simonlinktiles/Simonlinktiles.svelte';
import Carousel from '$lib/components/carousel/Carousel.svelte';
import Personatiles from '$lib/components/personatiles/Personatiles.svelte';
</script>

<Menubar {brand} {menutree} />
<Herounit title={herotitle} subtitle={herosub}/>
<Docslink {leftlink} {rightlink}/>
<Searchbar {searchactions} />
<Statscounters {counters}/>
<Simonlinktiles {tilelinks}/>
<Carousel {stories}/>
<Personatiles {caption} {personas} {images}/>
