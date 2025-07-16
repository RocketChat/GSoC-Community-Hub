<script lang="ts">
	import { brand } from '$data/brand';
	import { menutree } from '$data/menutree';
	import { herotitle } from '$data/herotitle';
	import { herosub } from '$data/herosub';
	import { leftlink } from '$data/leftlink';
	import { rightlink } from '$data/rightlink';
	import { searchactions } from '$data/searchactions';
	import { counters } from '$data/counters';
	import { tilelinks } from '$data/tilelinks';
	import { stories } from '$data/stories';
	import { caption } from '$data/caption';
	import { personas } from '$data/personas';
	import { images } from '$data/images';
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
<Herounit title={herotitle} subtitle={herosub} />
<Docslink {leftlink} {rightlink} />
<Searchbar {searchactions} />
<Statscounters {counters} />
<Simonlinktiles {tilelinks} />
<Carousel {stories} />
<Personatiles {caption} {personas} {images} />
