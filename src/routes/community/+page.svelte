
<script lang="ts">
   import { brand } from "../../build/brand";
 import { menutree } from "../../build/menutree";
 import { herounit } from "../../build/herounit";
 import { docslink } from "../../build/docslink";
 import { searchactions } from "../../build/searchactions";
 import { counters } from "../../build/counters";
 import { tilelinks } from "../../build/tilelinks";
 import { stories } from "../../build/stories";
 import { personalities } from "../../build/personalities";
  import Menubar from '$lib/components/menubar/Menubar.svelte';
import Herounit from '$lib/components/herounit/Herounit.svelte';
import Docslink from '$lib/components/docslink/Docslink.svelte';
import Searchbar from '$lib/components/searchbar/Searchbar.svelte';
import Statscounters from '$lib/components/statscounters/Statscounters.svelte';
import Simonlinktiles from '$lib/components/simonlinktiles/Simonlinktiles.svelte';
import Carousel from '$lib/components/carousel/Carousel.svelte';
import Personatiles from '$lib/components/personatiles/Personatiles.svelte';

let herotitle = herounit[0].herotitle;
let herosub = herounit[0].herosub;
let rightlink = docslink[0].rightlink;
let leftlink = docslink[0].leftlink;
let caption = personalities[0].caption;
let personas = personalities[0].personas;
let images = personalities[0].images;
</script>

<Menubar {brand} {menutree} />
<Herounit title={herotitle} subtitle={herosub}/>
<Docslink {leftlink} {rightlink}/>
<Searchbar {searchactions} />
<Statscounters {counters}/>
<Simonlinktiles {tilelinks}/>
<Carousel {stories}/>
<Personatiles {caption} {personas} {images}/>
