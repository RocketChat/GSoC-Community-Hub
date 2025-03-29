<script lang="ts">
	import Menubar from '$lib/components/menubar/Menubar.svelte';
	import Eventsscheduleposter from '$lib/components/eventsscheduleposter/Eventsscheduleposter.svelte';
	import { conferenceData, sessionsData } from '$lib/components/eventsscheduleposter/sampleEvents';
	
	// Menubar data
	let brand = "rocket.chat";
	let menutree = [
		{ top: "Community", dropdown: [ {label: "Community Rocket.Chat Serever"},  {label: "---"}, {label: "Forum"}, {label: "---"}, {label: "Github code contributons"},],},
		{ top: "Recent Events", dropdown: [ {label: "Alumni Summit 2024"},  {label: "---"}, {label: "Demo Day 2024"},],},
		{ top: "Google Summer of Code", dropdown: [ {label: "GSoC 2024"}, {label: "---"}, {label: "Projects"} ],},
		{ top: "AI Club", dropdown: [ {label: "Weekly meetup"},  {label: "---"},{label: "Open Channel"}, {label: "Discussion Forum"}, {label: "Discord"},],},
	];
</script>

<Menubar {brand} {menutree} />

<main class="events-page">
	<Eventsscheduleposter conference={conferenceData} sessions={sessionsData} />
</main>

<style>
	.events-page {
		min-height: 100vh;
		background-color: #ffffff;
		padding-bottom: 3rem;
	}
</style>
