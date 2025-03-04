<script module>
</script>

<script lang="ts">
	import { Container, Row, Col } from '@sveltestrap/sveltestrap';
	import { Styles } from '@sveltestrap/sveltestrap';
	import { tweened } from 'svelte/motion';
	import { cubicOut, quadOut, linear } from 'svelte/easing';
	let {counters} = $props();

	const c1 = tweened(0, { duration: 3000, easing: cubicOut});
	const c2 = tweened(0, { duration: 5000, easing: quadOut});
	const c3 = tweened(0, { duration: 3900, easing: linear});

	c1.set(counters[0].max);
	c2.set(counters[1].max);
	c3.set(counters[2].max);
</script>

<Styles />
<div>
	<Container>
		<Row>
			<Col>
				<span class="counter countup">{Math.round($c1)}</span>
				<div class="label">
					{counters[0].label}
				</div>
			</Col>
			<Col>
				<span class="counter countup border-start">
					{Math.round($c2)}
				</span>
				<div class="label">
					{counters[1].label}
				</div>
			</Col>
			<Col>
				<span class="counter countup border-start">
					{Math.round($c3)}
				</span>
				<div class="label">
					{counters[2].label}
				</div>
			</Col>
		</Row>
	</Container>
</div>

<style>
	span.counter {
		color: red;
	}
	.countup {
		font-size: clamp(16px, 5vw, 32px);
		color: #f5455c;
	}
	.label {
		font-size: clamp(12px, 3vw, 20px);
		font-weight: 300;
	}
</style>
