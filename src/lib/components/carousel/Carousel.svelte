<script module>
</script>

<script lang="ts"> 
	let { stories } = $props();

	import {
		Container,
		Row,
		Col,
	} from '@sveltestrap/sveltestrap';
	import Arrow from './Arrow.svelte';

	import { TinySlider } from 'svelte-tiny-slider';
	import { Styles } from '@sveltestrap/sveltestrap';

 let sw = $state(0);
 let slider = $state("");
 let currentI = $state(1)
</script>
{#snippet slides(swidth)}
  {#each stories as item}
    <img src={item} width={swidth / 3} alt="no_alt" />
  {/each}
{/snippet}


{#snippet controls(setI, currentI)}
          <button class="prev" onclick={() => setI((currentI > 1) ? (currentI - 1) : 0) }>
            <Arrow direction="left" />
            </button>
          <button class="next" onclick={() => setI( (currentI < (items.length - 4)) ? currentI : (currentI + 1) )} >
            <Arrow direction="right" /> </button>
{/snippet}

{#snippet tst(sw, ci)}
          {#each stories as item, i}
            {#if (i  >=  ci )}
            <img src={item} width={sw / 3} alt="no_alt" />
            {/if}
          {/each}
{/snippet}

<Styles /> 
<div>
	<Container>
		<Row>
			<Col>
			<TinySlider gap="10px" bind:this={slider} bind:sliderWidth={sw} bind:currentIndex={currentI}>
       
      {@render tst(sw, currentI)}
      {@render controls(slider.setIndex, currentI)}
      </TinySlider>
			</Col>
		</Row>
	</Container>
</div>

<style>
	.prev {
	  position: absolute; /* Positioned relative to the parent */
		left: 0; /* Aligns it to the left edge */
		top: 50%; /* Moves it halfway down the parent */
		transform: translateY(-50%); /* Centers it vertically */
		width: 50px;
		height: 50px;
		background-color: white;
	}

	.next {
	 position: absolute; /* Positioned relative to the parent */
		right: 0; /* Aligns it to the right edge */
		top: 50%; /* Moves it halfway down the parent */
		transform: translateY(-50%); /* Centers it vertically */
		width: 50px;
		height: 50px;
		background-color: white;
	}
</style>
