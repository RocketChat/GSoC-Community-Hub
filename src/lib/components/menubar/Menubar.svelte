<script lang="ts">
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

	export let brand: string;
	export let menutree: Array<{
		top: string;
		dropdown: Array<{
			label: string;
			href?: string;
		}>;
	}>;
</script>

{#snippet navItems()}
	{#each menutree as menu, i}
		{#if menu.top === 'Login'}
			{#if !authenticated.value}
				<Dropdown class="">
					<DropdownToggle
						nav
						caret
						class="border-b-2 border-solid border-transparent bg-none outline-none hover:border-secondaryColor focus:border-secondaryColor focus:text-secondaryColor "
						>{menu.top}</DropdownToggle
					>
					<DropdownMenu end>
						<Login {loginData} />
					</DropdownMenu>
				</Dropdown>
			{/if}
		{:else if menu.top === 'user'}
			{#if authenticated.value}
				<Dropdown>
					<div class="hidden lg:block">
						<DropdownToggle nav class="">
							{#if user.avatar}
								<img src={user.avatar} alt="User Avatar" class="avatar-img" />
							{/if}
						</DropdownToggle>
					</div>
					<DropdownToggle
						nav
						caret
						class="border-b-2 border-solid border-transparent bg-none outline-none hover:border-secondaryColor hover:text-secondaryColor focus:border-secondaryColor focus:text-secondaryColor"
					>
						{#if user.avatar}
							{menu.dropdownDisplayName}
						{/if}
					</DropdownToggle>
					<DropdownMenu>
						{#if user.role === 'admin'}
							<DropdownItem class="hover:text-secondaryColor" on:click={() => goto('/admin')}
								>{menu.dropdown[0]}</DropdownItem
							>
						{/if}
						<DropdownItem
							class="hover:text-secondaryColor"
							on:click={async () => {
								await keycloakInstance.instance?.logout();
							}}>{menu.dropdown[1]}</DropdownItem
						>
					</DropdownMenu>
				</Dropdown>
			{/if}
		{:else}
			<Dropdown>
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
		{/if}
	{/each}
{/snippet}
<Styles />
<div class="navbar-container">
	<div>
		<Navbar container="lg" expand="md">
			<NavbarBrand class="flex h-full items-center justify-center gap-2" href="/">
				<img src={brand.brandImgLink} alt={brand.brandName} />
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

<Styles />
<div class="navbar-container">
	<Navbar color="light" light container="lg" expand="md">
		<NavbarBrand href="/">{brand}</NavbarBrand>
		<Nav class="ms-auto" navbar>
			{#each menutree as menu, i}
				<Dropdown>
					<DropdownToggle nav caret>{menu.top}</DropdownToggle>
					<DropdownMenu>
						{#each menu.dropdown as item}
							{#if item.label == '---'}
								<DropdownItem divider />
							{:else}
								<DropdownItem href={item.href || '#'}>
									{item.label}
								</DropdownItem>
							{/if}
						{/each}
					</DropdownMenu>
				</Dropdown>
			{/each}
		</Nav>
	</Navbar>
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
