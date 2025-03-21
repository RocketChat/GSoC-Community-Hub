<script module>
</script>

<script lang="ts">
	let { brand, menutree } = $props();
	import {
		Navbar,
		NavbarBrand,
		Nav,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem,
		NavLink
	} from '@sveltestrap/sveltestrap';

	import { Styles } from '@sveltestrap/sveltestrap';
	import { authenticated, keycloakInstance, user } from '$lib/store.svelte';

	import { goto } from '$app/navigation';
</script>

<Styles />
<div class="navbar-container">
	<div>
		<Navbar color="light" light container="lg" expand="md">
			<NavbarBrand href="/">{brand}</NavbarBrand>
			<Nav class="ms-auto items-center" navbar>
				{#each menutree as menu, i}
					<Dropdown>
						<DropdownToggle nav caret>{menu.top}</DropdownToggle>
						<DropdownMenu>
							{#each menu.dropdown as item}
								{#if item.label == '---'}
									<DropdownItem divider />
								{:else}
									<DropdownItem>
										{item.label}
									</DropdownItem>
								{/if}
							{/each}
						</DropdownMenu>
					</Dropdown>
				{/each}
				{#if authenticated.value}
					<Dropdown>
						<DropdownToggle nav class="user-avatar">
							{#if user.avatar}
								<img src={user.avatar} alt="User Avatar" class="avatar-img" />
							{/if}
						</DropdownToggle>
						<DropdownMenu>
							{#if user.role === 'admin'}
								<DropdownItem on:click={() => goto('/admin')}>Admin</DropdownItem>
							{/if}
							<DropdownItem
								on:click={async () => {
									await keycloakInstance.instance?.logout();
								}}>Logout</DropdownItem
							>
						</DropdownMenu>
					</Dropdown>
				{:else}
					<NavLink color="light" onclick={() => goto('/login')}>Login</NavLink>
					<NavLink
						onclick={() => {
							goto('/register');
						}}>Register</NavLink
					>
				{/if}
			</Nav>
		</Navbar>
	</div>
</div>

<style>
	.navbar-container {
		margin-bottom: 1rem;
	}
	:global(.navbar) {
		padding: 0.75rem 1rem;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
	}
	:global(.navbar-brand) {
		font-weight: 600;
		font-size: 1.25rem;
		letter-spacing: -0.02em;
	}
	:global(.nav-link) {
		font-size: 0.95rem;
		padding: 0.5rem 1rem !important;
		font-weight: 500;
	}
	:global(.dropdown-menu) {
		border-radius: 6px;
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
		border: 1px solid rgba(0, 0, 0, 0.08);
		padding: 0.5rem 0;
	}
	:global(.dropdown-item) {
		font-size: 0.9rem;
		padding: 0.5rem 1.25rem;
	}
	.avatar-img {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		object-fit: cover;
	}
	.avatar-img:hover {
		scale: 1.05;
	}
</style>
