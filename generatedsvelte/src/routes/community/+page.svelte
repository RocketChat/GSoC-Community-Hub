<script lang="ts">
   import { brand } from "../../../../src/brand";
 import { menutree } from "../../../../src/menutree";
 import { herotitle } from "../../../../src/herotitle";
 import { herosub } from "../../../../src/herosub";
 import { leftlink } from "../../../../src/leftlink";
 import { rightlink } from "../../../../src/rightlink";
 import { searchactions } from "../../../../src/searchactions";
 import { counters } from "../../../../src/counters";
 import { tilelinks } from "../../../../src/tilelinks";
 import { stories } from "../../../../src/stories";
 import { caption } from "../../../../src/caption";
 import { personas } from "../../../../src/personas";
 import { images } from "../../../../src/images";
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
