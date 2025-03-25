<script lang="ts">
	import { keycloakInstance } from '$lib/store.svelte';
	let { loginData } = $props();
	console.log(loginData);
</script>

<div class="container">
	<div
		class="flex w-[15rem] flex-col items-center justify-evenly gap-4 sm:w-[30rem] md:w-[40rem] lg:h-[30rem] lg:w-[50rem] lg:flex-row"
	>
		<div class="auth-image h-full w-full">
			<div
				class="auth-image-content flex h-full w-full flex-col items-center justify-center text-center"
			>
				<h2>{loginData.welcomeTitle}</h2>
				<p>
					{loginData.welcomeSubtitle}
				</p>
			</div>
		</div>
		<div class="auth-form flex h-full w-full flex-col">
			<h1 class="">{loginData.loginInTitle}</h1>
			<p>{loginData.loginInSubtitle}</p>

			<div class="auth-benefits">
				<div class="benefit-item">
					<div class="benefit-icon">
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M16 8L2 22"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M17.5 15H9"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<span>{loginData.manageBenefit}</span>
				</div>
				<div class="benefit-item">
					<div class="benefit-icon">
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M9 12L11 14L15 10"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<span>{loginData.securityBenefit}</span>
				</div>
			</div>

			<button
				onclick={async () => {
					await keycloakInstance?.instance?.login();
				}}
				id="keycloak-login"
				class="login-button"
			>
				<span class="icon">
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15"
							stroke="white"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M10 17L15 12L10 7"
							stroke="white"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M15 12H3"
							stroke="white"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</span>
				<span>{loginData.loginButtonText}</span>
			</button>

			<div class="secure-info">
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M12 16V12"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M12 8H12.01"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<span>{loginData.secureInfoText}</span>
			</div>
			<p class="register-link text-black">
				{loginData.registerLinkText.prompt}
				<button
					class="underline hover:text-blue-700"
					onclick={async () => {
						await keycloakInstance?.instance?.register();
					}}>{loginData.registerLinkText.registerLink}</button
				>
			</p>
		</div>
	</div>
</div>

<style>
	.container {
		max-width: 1200px;
		/* margin: 0 auto; */
		padding: 20px;
	}

	.auth-image {
		/* flex: 1; */
		background: #f5455c;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
		color: white;
		position: relative;
	}

	.auth-image::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
		opacity: 0.2;
	}

	.auth-image-content {
		position: relative;
		z-index: 1;
	}

	.auth-image h2 {
		font-size: 2rem;
		margin-bottom: 20px;
	}

	.auth-image p {
		font-size: 1.1rem;
		max-width: 300px;
	}

	.auth-form h1 {
		font-size: 2rem;
		margin-bottom: 10px;
		color: #333333;
	}

	.auth-form p {
		color: #666;
		margin-bottom: 10px;
	}

	.auth-benefits {
		margin: 10px 0;
	}

	.benefit-item {
		display: flex;
		align-items: center;
		margin-bottom: 15px;
	}

	.benefit-icon {
		width: 24px;
		height: 24px;
		background-color: #f5455da7;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 15px;
	}

	.login-button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 14px 20px;
		background-color: #f5455c;
		color: white;
		border: none;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		box-shadow: 0 4px 6px rgba(67, 97, 238, 0.2);
	}

	.login-button:hover {
		transform: scale(1.05);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}

	.login-button .icon {
		margin-right: 10px;
	}
	.register-link {
		color: white;
	}
	.secure-info {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 20px;
		color: #666;
		font-size: 0.9rem;
	}

	.secure-info svg {
		margin-right: 8px;
	}
</style>
