<script lang="ts">
   import { brand } from "../build/brand";
 import { menutree } from "../build/menutree";
 import { herotitle } from "../build/herotitle";
 import { herosub } from "../build/herosub";
 import { leftlink } from "../build/leftlink";
 import { rightlink } from "../build/rightlink";
 import { searchactions } from "../build/searchactions";
 import { counters } from "../build/counters";
 import { tilelinks } from "../build/tilelinks";
 import { stories } from "../build/stories";
 import { caption } from "../build/caption";
 import { personas } from "../build/personas";
 import { images } from "../build/images";
 import { loginData } from "$build/loginData";
  import Menubar from '$lib/components/menubar/Menubar.svelte';
import Herounit from '$lib/components/herounit/Herounit.svelte';
import Docslink from '$lib/components/docslink/Docslink.svelte';
import Searchbar from '$lib/components/searchbar/Searchbar.svelte';
import Statscounters from '$lib/components/statscounters/Statscounters.svelte';
import Simonlinktiles from '$lib/components/simonlinktiles/Simonlinktiles.svelte';
import Carousel from '$lib/components/carousel/Carousel.svelte';
import Personatiles from '$lib/components/personatiles/Personatiles.svelte';
</script>

<Menubar {brand} {menutree} {loginData} />
<Herounit title={herotitle} subtitle={herosub}/>
<Docslink {leftlink} {rightlink}/>
<Searchbar {searchactions} />
<Statscounters {counters}/>
<Simonlinktiles {tilelinks}/>
<Carousel {stories}/>
<Personatiles {caption} {personas} {images}/>
