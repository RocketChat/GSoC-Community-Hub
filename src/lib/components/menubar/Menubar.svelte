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
	import Login from '../login/Login.svelte';
</script>

{#snippet navItems()}
	{#each menutree as menu, i}
		<Dropdown class="">
			<DropdownToggle
				nav
				class="border-b-2 border-solid border-transparent  hover:border-secondaryColor hover:text-secondaryColor focus:border-secondaryColor"
				caret>{menu.top}</DropdownToggle
			>
			<DropdownMenu>
				{#each menu.dropdown as item}
					{#if item.label == '---'}
						<DropdownItem divider />
					{:else}
						<DropdownItem class="hover:text-secondaryColor">
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
					<DropdownItem class="hover:text-secondaryColor" on:click={() => goto('/admin')}
						>Admin</DropdownItem
					>
				{/if}
				<DropdownItem
					class="hover:text-secondaryColor"
					on:click={async () => {
						await keycloakInstance.instance?.logout();
					}}>Logout</DropdownItem
				>
			</DropdownMenu>
		</Dropdown>
	{:else}
		<Dropdown>
			<DropdownToggle
				nav
				caret
				class="border-b-2 border-solid border-transparent bg-none outline-none hover:border-secondaryColor focus:border-secondaryColor focus:border-secondaryColor focus:text-secondaryColor "
				>Login</DropdownToggle
			>
			<DropdownMenu end>
				<Login />
			</DropdownMenu>
		</Dropdown>
		<!-- <NavLink
	on:click={() => {
		goto('/register');
	}}>Register</NavLink
> -->
	{/if}
{/snippet}
<Styles />
<div class="navbar-container">
	<div>
		<Navbar container="lg" expand="md">
			<NavbarBrand class="flex h-full items-center justify-center gap-2" href="/">
				<img
					src="https://cdn.prod.website-files.com/611a19b9853b7414a0f6b3f6/611bbb87319adfd903b90f24_logoRC.svg"
					alt=""
				/>
			</NavbarBrand>
			<div class="hidden lg:block">
				<Nav class="ms-auto flex items-center gap-3" navbar>
					{@render navItems()}
				</Nav>
			</div>
			<div class="lg:hidden">
				<Dropdown>
					<DropdownToggle nav>
						<svg width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
							><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path
								d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
							/></svg
						>
					</DropdownToggle>
					<DropdownMenu class="gap-2">
						{@render navItems()}
					</DropdownMenu>
				</Dropdown>
			</div>
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
		/* font-weight: 600; */
		font-size: 1.25rem;
		letter-spacing: -0.02em;
	}
	:global(.nav-link) {
		font-size: 0.95rem;
		padding: 0.5rem 1rem;
		/* font-weight: 500; */
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
