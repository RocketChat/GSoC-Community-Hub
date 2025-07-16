<script module>
	let direction = 'left';
</script>

<script>
	let { direction } = $props();
</script>

<svg viewBox="0 0 30.725 30.725" style:transform={direction == 'right' ? 'rotate(180deg)' : ''}>
	<path
		fill="currentColor"
		d="M23.078,15.362a0.77,0.77,0,0,1-0.77,0.77H11.54l3.3,3.3a0.77,0.77,0,0,1-1.088,1.088l-4.85-4.85a0.77,0.77,0,0,1,0-1.089l4.85-4.85a0.77,0.77,0,1,1,1.088,1.088l-3.3,3.3h10.768a0.77,0.77,0,0,1,0.77,0.77Z"
	/>
</svg>
