```svelte
<script>
	const stories = [
		{
			id: 1,
			imageUrl: '/images/news1.jpg',
			name: 'AI Takes Over Frontend',
			description: 'A major shift as AI-driven UIs become the new standard.'
		},
		{
			id: 2,
			imageUrl: '/images/news2.jpg',
			name: 'Svelte 5 Launched',
			description: 'The latest version of Svelte brings performance and simplicity.'
		},
		{
			id: 3,
			imageUrl: '/images/news3.jpg',
			name: 'Web3 Hits Campus',
			description: 'Student-led startups bring decentralized tech to universities.'
		}
		// Add more stories as needed
	];
</script>

use Carousel from $lib/components/carousel/Carousel.svelte get stories

<main>
	<Carousel {stories} />
</main>
```
