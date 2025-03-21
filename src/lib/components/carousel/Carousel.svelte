<script module>
</script>

<script lang="ts">
	let { stories } = $props();
	let n = stories.length;

	import { Container, Row, Col } from '@sveltestrap/sveltestrap';
	import Arrow from './Arrow.svelte';

	import { TinySlider } from 'svelte-tiny-slider';
	import { Styles } from '@sveltestrap/sveltestrap';

	let sw = $state(0);
</script>

<Styles />
<div>
	<Container>
		<Row>
			<Col>
				<div class="tiny-slider-wrapper">
					<TinySlider gap="10px" bind:sliderWidth={sw}>
						<!-- items -->
						{#snippet children({ currentIndex })}
							{#each stories as item, i}
								{#if i >= currentIndex}
									<img src={item} width={sw / 3} alt="no_alt" />
								{/if}
							{/each}
						{/snippet}

						<!-- controls -->
						{#snippet controls({ setIndex, currentIndex })}
							<button
								class="prev"
								onclick={() => setIndex(currentIndex > 0 ? currentIndex - 1 : 0)}
							>
								<Arrow direction="left" />
							</button>

							<button
								class="next"
								onclick={() =>
									setIndex(currentIndex < n - 4 ? currentIndex : currentIndex + 1)}
							>
								<Arrow direction="right" />
							</button>

							<div class="btn-container">
								{#each Array(Math.ceil(stories.length / 3)) as _, i}
									<button
										class="car-btn"
										class:active={i == currentIndex}
										onclick={() => setIndex(i)}
										aria-label={`Go to page ${i + 1}`}
									></button>
								{/each}
							</div>
						{/snippet}
					</TinySlider>
				</div>
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
		/* background-color: white; */
	}

	.next {
		position: absolute; /* Positioned relative to the parent */
		right: 0; /* Aligns it to the right edge */
		top: 50%; /* Moves it halfway down the parent */
		transform: translateY(-50%); /* Centers it vertically */
		width: 50px;
		height: 50px;
		/* background-color: white; */
	}
	.tiny-slider-wrapper {
		position: relative;
		/* background-color: whitesmoke; */
		padding-left: 4rem;
		padding-right: 4rem;
		padding-top: 2rem;
		padding-bottom: 1rem;
	}
	.btn-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
		gap: 8px; /* Add spacing between buttons */
	}

	.car-btn {
		background-color: gainsboro;
		width: 0.5rem;
		height: 0.5rem;
		margin: 4px;
		border-radius: 50%;
	}
	.car-btn:hover {
		background-color: gray;
	}
	.active {
		background-color: gray;
	}
</style>