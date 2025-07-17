```svelte
<script>
	import EventPoster from '$lib/components/EventPoster.svelte';

	let eventData = {
		event: {
			title: 'Alumni Summit 2025',
			meetlink: 'https://meet.example.com',
			time_and_date: {
				start: '2025-06-25T10:00:00Z',
				end: '2025-06-25T16:00:00Z'
			},
			location: 'Main Auditorium',
			ticket: 'Free with Registration',
			Overview: ['This summit brings together alumni from across the country to share knowledge.'],
			sessions: [
				{
					start_time: '10:00 AM',
					end_time: '11:00 AM',
					title: 'Keynote',
					speaker: 'John Doe',
					duration: 60,
					yt_link: 'https://youtube.com/watch?v=abc123'
				}
			],
			speakers: [
				{
					name: 'Jane Smith',
					bio: 'Tech Lead at InnovateX',
					image: '/images/jane.jpg',
					more: 'Jane has worked on AI solutions for over a decade.',
					social: [{ linkedin: 'https://linkedin.com/in/janesmith' }]
				}
			]
		}
	};
</script>

<main>
	<EventPoster {eventData} />
</main>
```
