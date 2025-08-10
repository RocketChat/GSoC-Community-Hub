<script module>
</script>

<script lang="ts">
	import { Container, Row, Col } from '@sveltestrap/sveltestrap';
	import { Styles } from '@sveltestrap/sveltestrap';
	import { tweened } from 'svelte/motion';
	import { cubicOut, quadOut, linear } from 'svelte/easing';
	let {discordCounters} = $props();



	const c1 = tweened(0, { duration: 3000, easing: cubicOut});
	const c2 = tweened(0, { duration: 5000, easing: quadOut});
	const c3 = tweened(0, { duration: 3900, easing: linear});

	c1.set(discordCounters[0].max);
	c2.set(discordCounters[1].max);
	c3.set(discordCounters[2].max);
</script>

<Styles />
<div class="stats-container">
	<Container>
		<Row>
			<Col md="4" class="stats-col">
				<div class="stats-item">
					<span class="counter countup">{Math.round($c1)}</span>
					<div class="label">
						{discordCounters[0].label}
					</div>
				</div>
			</Col>
			<Col md="4" class="stats-col">
				<div class="stats-item">
					<span class="counter countup">
						{Math.round($c2)}
					</span>
					<div class="label">
						{discordCounters[1].label}
					</div>
				</div>
			</Col>
			<Col md="4" class="stats-col">
				<div class="stats-item">
					<span class="counter countup">
						{Math.round($c3)}
					</span>
					<div class="label">
						{discordCounters[2].label}
					</div>
				</div>
			</Col>
		</Row>
	</Container>
</div>

<style>
	.stats-container {
		padding: 3rem 0;
		background-color: #f8f9fa;
		margin: 2rem 0;
		border-radius: 8px;
	}
	
	.stats-col {
		position: relative;
	}
	
	.stats-col:not(:first-child)::before {
		content: '';
		position: absolute;
		left: 0;
		top: 10%;
		height: 80%;
		width: 1px;
		background-color: #ddd;
	}
	
	.stats-item {
		text-align: center;
		padding: 1rem;
	}
	
	.counter {
		display: block;
		margin-bottom: 0.5rem;
	}
	
	.countup {
		font-size: clamp(2rem, 6vw, 3rem);
		color: #f5455c;
		font-weight: 700;
		line-height: 1.2;
	}
	
	.label {
		font-size: clamp(1rem, 2vw, 1.25rem);
		font-weight: 500;
		color: #333;
		line-height: 1.4;
	}
	
	@media (max-width: 767px) {
		.stats-col:not(:first-child)::before {
			display: none;
		}
		
		.stats-item {
			margin-bottom: 2rem;
		}
		
		.stats-col:last-child .stats-item {
			margin-bottom: 0;
		}
	}
</style>