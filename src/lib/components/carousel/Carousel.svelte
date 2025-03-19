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
{#snippet slides(swidth: number)}
  {#each stories as item}
    <img src={item} width={swidth / 3} alt="no_alt" />
  {/each}
{/snippet}


{#snippet controls(setI: (arg0: number) => any, currentI: number)}
          <button class="prev" onclick={() => setI((currentI > 1) ? (currentI - 1) : 0) }>
            <Arrow direction="left" />
            </button>
          <button class="next" onclick={() => setI((currentI < (stories.length - 3)) ? (currentI + 1) : currentI)} >
            <Arrow direction="right" /> </button>
{/snippet}

{#snippet tst(sw: number, ci: number)}
          {#each stories as item, i}
            {#if (i  >=  ci )}
            <img src={item} width={sw / 3} alt="no_alt" class="carousel-image" />
            {/if}
          {/each}
{/snippet}

<Styles /> 
<div class="carousel-container">
	<Container fluid>
		<Row>
			<Col>
			<TinySlider gap="20px" bind:this={slider} bind:sliderWidth={sw} bind:currentIndex={currentI}>
       
      {@render tst(sw, currentI)}
      {@render controls(slider.setIndex, currentI)}
      </TinySlider>
			</Col>
		</Row>
	</Container>
</div>

<style>
	.carousel-container {
		margin: 2rem 0;
		position: relative;
		overflow: hidden;
	}

	.carousel-image {
		border-radius: 6px;
		box-shadow: 0 2px 8px rgba(0,0,0,0.1);
	}

	.prev, .next {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 40px;
		height: 40px;
		background-color: white;
		border: none;
		border-radius: 50%;
		box-shadow: 0 2px 8px rgba(0,0,0,0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		z-index: 10;
		transition: all 0.2s ease;
	}
	
	.prev:hover, .next:hover {
		background-color: #f8f8f8;
		box-shadow: 0 4px 12px rgba(0,0,0,0.2);
	}

	.prev {
		left: 10px;
	}

	.next {
		right: 10px;
	}
</style>