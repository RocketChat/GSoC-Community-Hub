<script lang="ts">
	import { slide } from 'svelte/transition';
	export let eventData: {
		event: {
			title: string;
			meetlink: string;
			time_and_date: {
				start: string;
				end: string;
			};
			location: string;
			ticket: string;
			Overview: string[];
			sessions: Array<{
				start_time: string;
				end_time: string;
				title: string;
				speaker: string;
				duration: number;
				yt_link?: string;
			}>;
			speakers: Array<{
				name: string;
				bio: string;
				image: string;
				more: string;
				social: Array<{
					github?: string;
					email?: string;
					twitter?: string;
					linkedin?: string;
				}>;
			}>;
		};
	};

	let activeTab = 'overview';
	let expandedSpeakerId: number | null = null;

	function setTab(tab: string) {
		activeTab = tab;
		expandedSpeakerId = null;
	}

	function toggleSpeakerDetails(index: number) {
		expandedSpeakerId = expandedSpeakerId === index ? null : index;
	}
</script>

<div class="event-poster">
	<div class="header">
		<img src="/alumni_summit_2025.png" alt="Event Poster" class="poster-image" />
		<h1>{eventData.event.title}</h1>
		<div class="event-meta">
			<p class="date">
				📅 {new Date(eventData.event.time_and_date.start).toLocaleDateString()}
				{new Date(eventData.event.time_and_date.start).toLocaleTimeString([], {
					hour: '2-digit',
					minute: '2-digit'
				})} - {new Date(eventData.event.time_and_date.end).toLocaleTimeString([], {
					hour: '2-digit',
					minute: '2-digit'
				})}
			</p>
			<p class="location">📍 {eventData.event.location}</p>
			<p class="ticket">🎟️ {eventData.event.ticket}</p>
		</div>
		<a href={eventData.event.meetlink} target="_blank" rel="noopener" class="join-button"> Join </a>
	</div>

	<div class="tabs">
		<button class:active={activeTab === 'overview'} on:click={() => setTab('overview')}
			>Overview</button
		>
		<button class:active={activeTab === 'sessions'} on:click={() => setTab('sessions')}
			>Sessions</button
		>
		<button class:active={activeTab === 'speakers'} on:click={() => setTab('speakers')}
			>Speakers</button
		>
	</div>

	{#if activeTab === 'overview'}
		<div class="overview">
			<h2>About the Event</h2>
			<p>{eventData.event.Overview}</p>
		</div>
	{:else if activeTab === 'sessions'}
		<div class="schedule">
			<h2>Sessions</h2>
			<div class="sessions-table">
				<div class="table-header">
					<div class="col">Start</div>
					<div class="col">End</div>
					<div class="col title-col">Title</div>
					<div class="col">Speaker</div>
					<div class="col">Duration</div>
					<div class="col">Youtube</div>
				</div>
				{#each eventData.event.sessions as session}
					<div class="table-row">
						<div class="col">{session.start_time}</div>
						<div class="col">{session.end_time}</div>
						<div class="col title-col">{session.title}</div>
						<div class="col">{session.speaker}</div>
						<div class="col">{session.duration} min</div>
						<div class="col">
							{#if session.yt_link}
								<a href={session.yt_link} class="youtube-link" target="_blank" rel="noopener">
									Watch Recording
								</a>
							{:else}
								<span class="youtube-link coming-soon">Coming Soon...</span>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{:else if activeTab === 'speakers'}
		<div class="speakers">
			<h2>Speakers</h2>
			<div class="speakers-grid">
				{#each eventData.event.speakers as speaker, i}
					<div class="speaker-card" class:expanded={expandedSpeakerId === i}>
						<div class="speaker-basic-info">
							<div class="speaker-image-container">
								<img src={speaker.image} alt={speaker.name} class="speaker-image" />
							</div>
							<div class="speaker-content">
								<h3>{speaker.name}</h3>
								<p class="bio">{speaker.bio}</p>
								<div class="speaker-actions">
									<button class="learn-more" on:click={() => toggleSpeakerDetails(i)}>
										{expandedSpeakerId === i ? 'Show Less' : 'Learn More'}
									</button>
								</div>
							</div>
						</div>
						{#if expandedSpeakerId === i}
							<div class="speaker-details" transition:slide>
								<p class="more">{speaker.more}</p>
								<div class="social-links-expanded">
									{#each speaker.social as social}
										{#if social.github}
											<a href={social.github} target="_blank" rel="noopener" class="social-link">
												<span class="icon">📂</span> GitHub
											</a>
										{/if}
										{#if social.twitter}
											<a href={social.twitter} target="_blank" rel="noopener" class="social-link">
												<span class="icon">🐦</span> Twitter
											</a>
										{/if}
										{#if social.linkedin}
											<a href={social.linkedin} target="_blank" rel="noopener" class="social-link">
												<span class="icon">💼</span> LinkedIn
											</a>
										{/if}
										{#if social.email}
											<a href="mailto:{social.email}" class="social-link">
												<span class="icon">📧</span> Email
											</a>
										{/if}
									{/each}
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.event-poster {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	.header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.poster-image {
		max-width: 100%;
		height: auto;
		margin-bottom: 2rem;
	}

	.event-meta {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.event-meta p {
		margin: 0;
		font-size: 1.1rem;
	}

	.tabs {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.tabs button {
		padding: 0.75rem 2rem;
		border: none;
		background: none;
		font-size: 1.1rem;
		cursor: pointer;
		border-bottom: 2px solid transparent;
		transition: all 0.2s;
	}

	.tabs button.active {
		border-bottom-color: #0066cc;
		color: #0066cc;
	}

	.schedule {
		margin: 3rem 0;
	}

	.sessions-table {
		border: 1px solid #eee;
		border-radius: 8px;
		overflow: hidden;
	}

	.table-header {
		display: grid;
		grid-template-columns: 100px 100px 2fr 1fr 100px 120px;
		background-color: #f8f9fa;
		padding: 1rem;
		font-weight: bold;
		border-bottom: 1px solid #eee;
	}

	.table-row {
		display: grid;
		grid-template-columns: 100px 100px 2fr 1fr 100px 120px;
		padding: 1rem;
		border-bottom: 1px solid #eee;
		align-items: center;
	}

	.table-row:last-child {
		border-bottom: none;
	}

	.table-row:hover {
		background-color: #f8f9fa;
	}

	.col {
		padding: 0 0.5rem;
		font-size: 0.95rem;
	}

	.title-col {
		font-weight: 500;
	}

	.youtube-link {
		color: #cc0000;
		text-decoration: none;
		font-size: 0.9rem;
		white-space: nowrap;
	}

	.youtube-link.coming-soon {
		color: #666;
		font-style: italic;
	}

	.speakers-grid {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-top: 2rem;
	}

	.speaker-card {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		background: white;
		border: 1px solid #eee;
		border-radius: 12px;
		transition: all 0.3s;
	}

	.speaker-card:hover {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.speaker-image-container {
		flex-shrink: 0;
		width: 180px;
		height: 180px;
	}

	.speaker-image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
		border: 3px solid #f0f0f0;
	}

	.speaker-content {
		flex: 1;
	}

	.speaker-content h3 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: #2c3e50;
	}

	.bio {
		font-size: 1rem;
		color: #34495e;
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	.more {
		font-size: 1rem;
		line-height: 1.6;
		color: #34495e;
		margin-bottom: 1.5rem;
	}

	.social-links {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.social-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background-color: #f8f9fa;
		border-radius: 6px;
		color: #2c3e50;
		text-decoration: none;
		transition: all 0.2s;
		font-size: 0.95rem;
	}

	.social-link:hover {
		background-color: #e9ecef;
		color: #0066cc;
	}

	.icon {
		font-size: 1.2rem;
	}

	.speaker-basic-info {
		display: flex;
		gap: 2rem;
	}

	.speaker-actions {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 1rem;
	}

	.learn-more {
		padding: 0.75rem 1.5rem;
		background-color: #0066cc;
		color: white;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		transition: background-color 0.2s;
		font-weight: 500;
		font-size: 0.95rem;
		align-self: flex-start;
	}

	.learn-more:hover {
		background-color: #0052a3;
	}

	.speaker-details {
		margin-top: 2rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
	}

	.social-links-expanded {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 1.5rem;
	}

	@media (max-width: 768px) {
		.table-header {
			display: none;
		}

		.table-row {
			grid-template-columns: 1fr;
			gap: 0.5rem;
		}

		.col {
			padding: 0.25rem 0;
		}

		.col:before {
			content: attr(data-label);
			font-weight: bold;
			margin-right: 0.5rem;
			color: #666;
		}

		.speaker-basic-info {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		.speaker-actions {
			align-items: center;
		}

		.learn-more {
			align-self: center;
		}
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 2rem;
	}

	h3 {
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
	}

	.join-button {
		display: inline-block;
		margin-top: 1.5rem;
		padding: 0.75rem 2.5rem;
		background-color: #0066cc;
		color: white;
		text-decoration: none;
		border-radius: 6px;
		font-size: 1.1rem;
		font-weight: 500;
		transition: all 0.2s;
	}

	.join-button:hover {
		background-color: #0052a3;
	}
</style>
