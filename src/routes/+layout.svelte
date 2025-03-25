<script lang="ts">
	import '../app.css';
	import Menubar from '$lib/components/menubar/Menubar.svelte';
	let { children } = $props();
	// Menubar data from CRM
	let brand = {
		brandName: 'rocket.chat',
		brandImgLink:
			'https://cdn.prod.website-files.com/611a19b9853b7414a0f6b3f6/611bbb87319adfd903b90f24_logoRC.svg'
	};
	let menutree = [
		{
			top: 'Community',
			dropdown: [
				{ label: 'Community Rocket.Chat Serever' },
				{ label: '---' },
				{ label: 'Forum' },
				{ label: '---' },
				{ label: 'Github code contributons' }
			]
		},
		{
			top: 'Recent Events',
			dropdown: [{ label: 'Alumni Summit 2024' }, { label: '---' }, { label: 'Demo Day 2024' }]
		},
		{
			top: 'Google Summer of Code',
			dropdown: [
				{ label: 'GSoC 2024' },
				{ label: '---' },
				{ label: 'Projects' },
				{ label: 'Alumni Summit' },
				{ label: 'Demo Day' },
				{ label: '---' },
				{ label: 'GSoC 2023' },
				{ label: '---' },
				{ label: 'Projects' },
				{ label: 'Alumni Summit' },
				{ label: 'Demo Day' },
				{ label: '---' },
				{ label: 'GSoC 2022' },
				{ label: '---' },
				{ label: 'Projects' },
				{ label: 'Alumni Summit' },
				{ label: 'Demo Day' },
				{ label: '---' },
				{ label: 'GSoC 2021' },
				{ label: '---' },
				{ label: 'Projects' },
				{ label: 'Alumni Summit' },
				{ label: 'Demo Day' },
				{ label: '---' },
				{ label: 'GSoC 2020' },
				{ label: '---' },
				{ label: 'Projects' },
				{ label: 'Alumni Summit' },
				{ label: 'Demo Day' },
				{ label: '---' },
				{ label: 'GSoC 2019' },
				{ label: '---' },
				{ label: 'Projects' },
				{ label: 'Alumni Summit' },
				{ label: 'Demo Day' },
				{ label: '---' },
				{ label: 'GSoC 2018' },
				{ label: '---' },
				{ label: 'Projects' },
				{ label: 'Alumni Summit' },
				{ label: 'Demo Day' },
				{ label: '---' },
				{ label: 'GSoC 2017' },
				{ label: '---' },
				{ label: 'Projects' },
				{ label: 'Alumni Summit' },
				{ label: 'Demo Day' }
			]
		},
		{
			top: 'AI Club',
			dropdown: [
				{ label: 'Weekly meetup' },
				{ label: '---' },
				{ label: 'Open Channel' },
				{ label: 'Discussion Forum' },
				{ label: 'Discord' }
			]
		},
		{
			top: 'Login'
		},
		{
			top: 'user',
			dropdown: ['Admin', 'Logout']
		}
	];
</script>

<Menubar {brand} {menutree} />

{@render children()}
