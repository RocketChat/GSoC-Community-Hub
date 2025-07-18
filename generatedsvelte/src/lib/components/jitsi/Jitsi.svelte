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
		Button
	} from '@sveltestrap/sveltestrap';
	import { onMount, onDestroy } from 'svelte';
	import { userids } from '../../../../../build/userid';

	let roomName = `${userids[0].sub}${userids[0].mentorid[0]}`;
	let displayName = `${userids[0].username}`;
	let domain = 'meet.element.io';
	let isJoined = false;
	let isLoading = false;
	let participantCount = 0;
	let api = null;
	let jitsiNode;
	let enableVideo = true;
	let enableAudio = true;
	let enableChat = true;
	let enableScreenShare = true;
	let moderatorMode = false;
	let apiReady = false;
	let startTime = `${userids[0].meetingTime[0]}`;
	let endTime = `${userids[0].meetingTime[1]}`;

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://meet.element.io/external_api.js';

		script.onload = () => {
			apiReady = true;
		};

		document.head.appendChild(script);

		return () => {
			if (script.parentNode) {
				script.parentNode.removeChild(script);
			}
		};
	});

	onDestroy(() => {
		if (api) {
			api.dispose();
		}
	});

	async function joinMeeting() {
		if (!apiReady || !window.JitsiMeetExternalAPI) {
			alert('Meeting system still loading. Please try again in a few seconds.');
			return;
		}

		if (!roomName.trim() || !displayName.trim()) {
			alert('Please enter both room name and display name');
			return;
		}

		isLoading = true;
		isJoined = true;
		if (api) {
			api.dispose();
		}

		const options = {
			roomName,
			width: '100%',
			height: '100%',
			parentNode: jitsiNode,
			userInfo: { displayName },
			configOverwrite: {
				startWithAudioMuted: !enableAudio,
				startWithVideoMuted: !enableVideo,
				enableWelcomePage: false, //can't change this setting on example server meet.element.io
				prejoinPageEnabled: false,
				disableModeratorIndicator: !moderatorMode,
				toolbarButtons: [
					'microphone',
					'camera',
					'desktop',
					'fullscreen',
					'hangup',
					'profile',
					'chat',
					'recording',
					'livestreaming',
					'settings',
					'raisehand',
					'videoquality',
					'invite',
					'feedback',
					'stats',
					'tileview'
				].filter((button) => {
					if (button === 'desktop' && !enableScreenShare) return false;
					if (button === 'chat' && !enableChat) return false;
					return true;
				})
			},
			interfaceConfigOverwrite: {
				SHOW_JITSI_WATERMARK: false,
				SHOW_WATERMARK_FOR_GUESTS: false
			}
		};
		api = new JitsiMeetExternalAPI(domain, options);

		api.addListener('videoConferenceJoined', () => {
			isJoined = true;
			isLoading = false;
		});

		api.addListener('videoConferenceLeft', () => {
			isJoined = false;
		});

		api.addListener('participantJoined', () => {
			participantCount++;
		});

		api.addListener('participantLeft', () => {
			participantCount = Math.max(0, participantCount - 1);
		});

		api.addListener('readyToClose', () => {
			api.dispose();
			isJoined = false;
			isLoading = false;
		});
	}
</script>

<Container style="background-color: #f8f9fa;" fluid class="vh-100 d-flex flex-column">
	<Row class="h-100">
		<Col lg="4">
			<Card class="mb-4 border-0 shadow-sm">
				<CardBody class="p-4">
					<div class="d-flex justify-content-between align-items-center mb-4">
						<h3 class="conference-section-title mb-0">Meet With Mentee</h3>
					</div>
					<Form class="mb-4">
						<Row>
							<Col md="12">
								<FormGroup class="mb-3">
									<Label class="conference-label">Room Name:</Label>
									<Input
										type="text"
										bind:value={roomName}
										disabled
										class="conference-input"
										placeholder="Enter room name"
									/>
								</FormGroup>

								<FormGroup class="mb-3">
									<Label class="conference-label">From:</Label>
									<Input
										type="datetime-local"
										bind:value={startTime}
										disabled
										class="conference-input"
										placeholder="Enter room name"
									/>

									<Label class="conference-label">To:</Label>
									<Input
										type="datetime-local"
										bind:value={endTime}
										disabled
										class="conference-input"
										placeholder="Enter room name"
									/>
								</FormGroup>

								<FormGroup class="mb-3">
									<Label class="conference-label">Display Name:</Label>
									<Input
										type="text"
										bind:value={displayName}
										disabled
										class="conference-input"
										placeholder="Your name"
									/>
								</FormGroup>

								<FormGroup class="mb-0">
									<input
										type="checkbox"
										bind:checked={enableVideo}
										disabled={isJoined}
										class="me-2"
									/>
									<Label class="conference-label">Start with Video</Label>
								</FormGroup>
								<FormGroup class="mb-0">
									<input
										type="checkbox"
										bind:checked={enableAudio}
										disabled={isJoined}
										class="me-2"
									/>
									<Label class="conference-label">Start with Audio</Label>
								</FormGroup>
								<FormGroup class="mb-0">
									<input
										type="checkbox"
										bind:checked={enableScreenShare}
										disabled={isJoined}
										class="me-2"
									/>
									<Label class="conference-label">Enable Screen Sharing</Label>
								</FormGroup>
							</Col>
						</Row>

						<div class="d-flex mt-3 flex-wrap gap-2">
							<Button
								color="danger"
								on:click={joinMeeting}
								disabled={isLoading}
								class="conference-btn"
							>
								Join Meeting
							</Button>
						</div>
					</Form>
				</CardBody>
			</Card>
		</Col>

		<Col lg="8" class="d-flex flex-column">
			<Card class="flex-grow-1 border-0 shadow-sm">
				<CardBody class="h-100 p-0">
					<div
						bind:this={jitsiNode}
						class="conference-container h-100"
						style="min-height: 600px; height: 100%; background-color: #2f343d; border-radius: 0.5rem;"
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
									<p class="conference-placeholder-text">
										Configure your settings and click "Join Meeting"
									</p>
								</div>
							</div>
						{/if}
					</div>
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

	:global(.conference-placeholder-text) {
		color: #6c757d;
		font-size: 0.9rem;
	}
</style>
