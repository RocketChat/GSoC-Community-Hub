<script module>
</script>

<script lang="ts">
	let { stories } = $props();
	const n = stories.length;
	const itemsPerView = 3;

	import { Container, Row, Col } from '@sveltestrap/sveltestrap';
	import Arrow from './Arrow.svelte';

	import { TinySlider } from 'svelte-tiny-slider';
	import { Styles } from '@sveltestrap/sveltestrap';

	let sw = $state(0);
</script>

<Styles />
<div class="carousel-container">
	<div class="carousel-heading">Latest <span class="red-text">Community</span> News</div>
	<Container>
		<Row>
			<Col>
				<div class="tiny-slider-wrapper">
					<TinySlider gap="10px" bind:sliderWidth={sw}>
						<!-- items -->
						{#snippet children({ currentIndex })}
							{#each stories as item, i}
								{#if i >= currentIndex}
									<div class="item-container" style="width: {sw / itemsPerView}px;">
										<img src={item.imageUrl} width={sw / itemsPerView} alt="alt_img_{item.id}" />
										<div class="item-text">
											<span class="headline">{item.name}</span>
											<div class="description">{item.description}</div>
										</div>
									</div>
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
									setIndex(
										currentIndex < Math.ceil(n / itemsPerView) - 1 ? currentIndex + 1 : currentIndex
									)}
							>
								<Arrow direction="right" />
							</button>

							<div class="btn-container">
								{#each Array(Math.ceil(n / itemsPerView)) as _, i}
									<button
										class="car-btn"
										class:active={i === currentIndex}
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
	.carousel-container {
		background-color: whitesmoke;
		padding-top: 8px;
		padding-bottom: 8px;
	}
	.carousel-heading {
		font-size: 2rem;
		text-align: center;
		margin: 8px 0;
		font-weight: bold;
	}
	.tiny-slider-wrapper {
		position: relative;
		padding-left: 4rem;
		padding-right: 4rem;
		padding-top: 2rem;
		padding-bottom: 1rem;
	}
	.item-container {
		display: flex;
		flex-direction: column;
		background-color: white;
		border-radius: 0.5rem;
		overflow: hidden;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}
	.item-text {
		height: 10rem;
	}
	.headline {
		padding: 16px 16px 0px 16px;
		font-size: larger;
		font-weight: bold;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		line-clamp: 1;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	.description {
		padding: 16px;
		text-overflow: ellipsis;
		display: -webkit-box;
		line-clamp: 2;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
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
