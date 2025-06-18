<script>
	import {
		Container,
		Row,
		Col,
		Card,
		CardBody,
		Form,
		FormGroup,
		Label,
		Input,
		Button,
		Badge,
		Alert
	} from '@sveltestrap/sveltestrap';
	import { onMount, onDestroy } from 'svelte';

	// Conference settings
	let roomName = 'RocketChatMeeting';
	let displayName = 'User';
	let serverDomain = 'meet.jit.si';
	let isJoined = false;
	let isLoading = false;
	let participantCount = 0;
	let meetingStatus = 'Not Connected';
	let jitsiApi = null;
	let jitsiContainer;

	// Conference options
	let enableVideo = true;
	let enableAudio = true;
	let enableChat = true;
	let enableScreenShare = true;
	let moderatorMode = false;

	// Meeting history
	let meetingHistory = [
		{ room: 'Team-Standup', date: '2025-06-16', duration: '45 min', participants: 8 },
		{ room: 'Project-Review', date: '2025-06-15', duration: '1h 20min', participants: 12 },
		{ room: 'Client-Demo', date: '2025-06-14', duration: '30 min', participants: 5 }
	];

	onMount(() => {
		// Load Jitsi Meet API script
		const script = document.createElement('script');
		script.src = 'https://meet.jit.si/external_api.js';
		script.onload = () => {
			console.log('Jitsi Meet API loaded');
		};
		document.head.appendChild(script);

		return () => {
			if (script.parentNode) {
				script.parentNode.removeChild(script);
			}
		};
	});

	onDestroy(() => {
		if (jitsiApi) {
			jitsiApi.dispose();
		}
	});

	function joinMeeting() {
		if (!roomName.trim() || !displayName.trim()) {
			alert('Please enter both room name and display name');
			return;
		}

		isLoading = true;
		meetingStatus = 'Connecting...';

		// Clear previous instance
		if (jitsiApi) {
			jitsiApi.dispose();
		}

		// Jitsi Meet configuration
		const options = {
			roomName: roomName,
			width: '100%',
			height: 500,
			parentNode: jitsiContainer,
			userInfo: {
				displayName: displayName
			},
			configOverwrite: {
				startWithAudioMuted: !enableAudio,
				startWithVideoMuted: !enableVideo,
				enableWelcomePage: false,
				prejoinPageEnabled: false,
				disableModeratorIndicator: !moderatorMode,
				enableChat: enableChat,
				toolbarButtons: [
					'microphone',
					'camera',
					'closedcaptions',
					'desktop',
					'fullscreen',
					'fodeviceselection',
					'hangup',
					'profile',
					'chat',
					'recording',
					'livestreaming',
					'etherpad',
					'sharedvideo',
					'settings',
					'raisehand',
					'videoquality',
					'filmstrip',
					'invite',
					'feedback',
					'stats',
					'shortcuts',
					'tileview',
					'videobackgroundblur'
				].filter((button) => {
					if (button === 'desktop' && !enableScreenShare) return false;
					if (button === 'chat' && !enableChat) return false;
					return true;
				})
			},
			interfaceConfigOverwrite: {
				SHOW_JITSI_WATERMARK: false,
				SHOW_WATERMARK_FOR_GUESTS: false,
				DEFAULT_BACKGROUND: '#2f343d'
			}
		};

		// Initialize Jitsi Meet
		setTimeout(() => {
			if (window.JitsiMeetExternalAPI) {
				jitsiApi = new window.JitsiMeetExternalAPI(serverDomain, options);

				// Event listeners
				jitsiApi.addEventListener('videoConferenceJoined', () => {
					isJoined = true;
					isLoading = false;
					meetingStatus = 'Connected';
					console.log('Joined the meeting');
				});

				jitsiApi.addEventListener('videoConferenceLeft', () => {
					isJoined = false;
					meetingStatus = 'Disconnected';
					console.log('Left the meeting');
				});

				jitsiApi.addEventListener('participantJoined', (participant) => {
					participantCount++;
					console.log('Participant joined:', participant);
				});

				jitsiApi.addEventListener('participantLeft', (participant) => {
					participantCount = Math.max(0, participantCount - 1);
					console.log('Participant left:', participant);
				});

				jitsiApi.addEventListener('readyToClose', () => {
					jitsiApi.dispose();
					isJoined = false;
					meetingStatus = 'Not Connected';
				});
			} else {
				isLoading = false;
				meetingStatus = 'API not loaded';
				console.error('Jitsi Meet API not loaded');
			}
		}, 1000);
	}

	function leaveMeeting() {
		if (jitsiApi) {
			jitsiApi.executeCommand('hangup');
		}
	}

	function toggleAudio() {
		if (jitsiApi) {
			jitsiApi.executeCommand('toggleAudio');
		}
	}

	function toggleVideo() {
		if (jitsiApi) {
			jitsiApi.executeCommand('toggleVideo');
		}
	}

	function getStatusColor(status) {
		switch (status) {
			case 'Connected':
				return 'success';
			case 'Connecting...':
				return 'warning';
			case 'Disconnected':
				return 'secondary';
			default:
				return 'secondary';
		}
	}
</script>

<Container fluid class="px-5 py-4" style="background-color: #f8f9fa;">
	<Row>
		<Col lg="8">
			<!-- Conference Settings -->
			<Card class="mb-4 border-0 shadow-sm">
				<CardBody class="p-4">
					<div class="d-flex justify-content-between align-items-center mb-4">
						<h3 class="conference-section-title mb-0">Video Conference</h3>
						<div class="d-flex align-items-center gap-3">
							<Badge color={getStatusColor(meetingStatus)} class="conference-status">
								{meetingStatus}
							</Badge>
							{#if participantCount > 0}
								<Badge color="info" class="conference-participants">
									{participantCount} participant{participantCount !== 1 ? 's' : ''}
								</Badge>
							{/if}
						</div>
					</div>

					<Form class="mb-4">
						<Row>
							<Col md="6">
								<FormGroup class="mb-3">
									<Label class="conference-label">Room Name:</Label>
									<Input
										type="text"
										bind:value={roomName}
										disabled={isJoined}
										class="conference-input"
										placeholder="Enter room name"
									/>
								</FormGroup>
							</Col>
							<Col md="6">
								<FormGroup class="mb-3">
									<Label class="conference-label">Display Name:</Label>
									<Input
										type="text"
										bind:value={displayName}
										disabled={isJoined}
										class="conference-input"
										placeholder="Your name"
									/>
								</FormGroup>
							</Col>
						</Row>

						<Row class="mb-3">
							<Col md="6">
								<FormGroup class="mb-2">
									<Label class="conference-label">
										<Input
											type="checkbox"
											bind:checked={enableVideo}
											disabled={isJoined}
											class="me-2"
										/>
										Start with video
									</Label>
								</FormGroup>
								<FormGroup class="mb-2">
									<Label class="conference-label">
										<Input
											type="checkbox"
											bind:checked={enableAudio}
											disabled={isJoined}
											class="me-2"
										/>
										Start with audio
									</Label>
								</FormGroup>
							</Col>
							<Col md="6">
								<FormGroup class="mb-2">
									<Label class="conference-label">
										<Input
											type="checkbox"
											bind:checked={enableChat}
											disabled={isJoined}
											class="me-2"
										/>
										Enable chat
									</Label>
								</FormGroup>
								<FormGroup class="mb-2">
									<Label class="conference-label">
										<Input
											type="checkbox"
											bind:checked={enableScreenShare}
											disabled={isJoined}
											class="me-2"
										/>
										Enable screen sharing
									</Label>
								</FormGroup>
							</Col>
						</Row>

						<div class="d-flex gap-2">
							{#if !isJoined}
								<Button
									color="danger"
									on:click={joinMeeting}
									disabled={isLoading}
									class="conference-btn"
								>
									{isLoading ? 'Connecting...' : 'Join Meeting'}
								</Button>
							{:else}
								<Button color="outline-danger" on:click={leaveMeeting} class="conference-btn">
									Leave Meeting
								</Button>
								<Button color="outline-secondary" on:click={toggleAudio} class="conference-btn">
									Toggle Audio
								</Button>
								<Button color="outline-secondary" on:click={toggleVideo} class="conference-btn">
									Toggle Video
								</Button>
							{/if}
						</div>
					</Form>
				</CardBody>
			</Card>

			<!-- Video Conference Container -->
			<Card class="border-0 shadow-sm">
				<CardBody class="p-0">
					<div
						bind:this={jitsiContainer}
						class="conference-container"
						style="min-height: 500px; background-color: #2f343d; border-radius: 0.5rem;"
					>
						{#if !isJoined && !isLoading}
							<div class="d-flex align-items-center justify-content-center h-100 text-center">
								<div class="conference-placeholder">
									<div class="conference-placeholder-icon mb-3">
										<svg
											width="64"
											height="64"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										>
											<path d="M23 7l-7 5 7 5V7z" />
											<rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
										</svg>
									</div>
									<h4 class="conference-placeholder-title">Ready to Join</h4>
									<p class="conference-placeholder-text">
										Configure your settings above and click "Join Meeting"
									</p>
								</div>
							</div>
						{:else if isLoading}
							<div class="d-flex align-items-center justify-content-center h-100">
								<div class="text-center">
									<div class="spinner-border text-danger mb-3" role="status">
										<span class="visually-hidden">Loading...</span>
									</div>
									<p class="conference-loading-text">Connecting to meeting...</p>
								</div>
							</div>
						{/if}
					</div>
				</CardBody>
			</Card>
		</Col>

		<Col lg="4">
			<!-- Meeting History -->
			<Card class="border-0 shadow-sm">
				<CardBody class="p-4">
					<h4 class="conference-section-title mb-4">Recent Meetings</h4>

					<div class="conference-history">
						{#each meetingHistory as meeting}
							<div class="conference-history-item mb-3 p-3">
								<div class="d-flex justify-content-between align-items-start mb-2">
									<h6 class="conference-history-room mb-1">{meeting.room}</h6>
									<small class="conference-history-date">{meeting.date}</small>
								</div>
								<div class="d-flex justify-content-between text-muted">
									<small>{meeting.duration}</small>
									<small>{meeting.participants} participants</small>
								</div>
							</div>
						{/each}
					</div>

					<Alert color="info" class="conference-tip mt-4">
						<strong>Tip:</strong> Room names are case-sensitive. Share the exact room name with participants.
					</Alert>
				</CardBody>
			</Card>
		</Col>
	</Row>
</Container>

<style>
	:global(.conference-section-title) {
		color: #2f343d;
		font-size: 1.5rem;
		font-weight: 600;
	}

	:global(.conference-label) {
		color: #2f343d;
		font-weight: 600;
		font-size: 0.9rem;
	}

	:global(.conference-input) {
		border: 1px solid #dee2e6;
		border-radius: 0.375rem;
		font-size: 0.9rem;
		padding: 0.5rem 0.75rem;
	}

	:global(.conference-input:focus) {
		border-color: #dc3545;
		box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
	}

	:global(.conference-btn) {
		font-size: 0.875rem;
		font-weight: 500;
		padding: 0.5rem 1.5rem;
	}

	:global(.conference-status) {
		font-size: 0.8rem;
		padding: 0.5rem 0.75rem;
	}

	:global(.conference-participants) {
		font-size: 0.8rem;
		padding: 0.5rem 0.75rem;
	}

	:global(.conference-container) {
		border-radius: 0.5rem;
		overflow: hidden;
	}

	:global(.conference-placeholder) {
		color: #6c757d;
	}

	:global(.conference-placeholder-icon) {
		color: #dc3545;
		opacity: 0.7;
	}

	:global(.conference-placeholder-title) {
		color: #2f343d;
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	:global(.conference-placeholder-text) {
		color: #6c757d;
		font-size: 0.9rem;
		margin-bottom: 0;
	}

	:global(.conference-loading-text) {
		color: #6c757d;
		font-size: 0.9rem;
		margin-bottom: 0;
	}

	:global(.conference-history-item) {
		background-color: #f8f9fa;
		border-radius: 0.375rem;
		border-left: 3px solid #dc3545;
	}

	:global(.conference-history-room) {
		color: #2f343d;
		font-weight: 600;
		font-size: 0.9rem;
	}

	:global(.conference-history-date) {
		color: #6c757d;
		font-size: 0.8rem;
	}

	:global(.conference-tip) {
		border: none;
		background-color: rgba(220, 53, 69, 0.1);
		color: #2f343d;
		font-size: 0.85rem;
	}
</style>
