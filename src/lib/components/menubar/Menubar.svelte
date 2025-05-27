<script lang="ts">
	import {
		Navbar,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem
	} from '@sveltestrap/sveltestrap';

	import { keycloakInstance, authenticated } from '$lib/auth/keycloakAuth'; 
	import { Styles } from '@sveltestrap/sveltestrap';
	export let brand: {
		brandName: string;
		brandImgLink: string;
	}

	export let menutree: Array<{
		top: string;
		dropdown: Array<{
			label: string;
			href?: string;
		}>;
	}>;
</script>

<style>
    .navbar-container {
        margin-bottom: 1rem;
    }
    :global(.navbar) {
        padding: 0.75rem 1rem;
        box-shadow: 0 2px 10px rgba(0,0,0,0.08);
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
        box-shadow: 0 4px 14px rgba(0,0,0,0.1);
        border: 1px solid rgba(0,0,0,0.08);
        padding: 0.5rem 0;
    }
    :global(.dropdown-item) {
        font-size: 0.9rem;
        padding: 0.5rem 1.25rem;
    }
</style>

{#snippet nav()}
			<Nav class="ms-auto" navbar>
				{#each menutree as menu, i}
				{#if menu.top === "Login"}
					<NavItem>
						<NavLink on:click={async () => keycloakInstance.instance?.login()}>{menu.top}</NavLink>
					</NavItem>
				{:else}
				<Dropdown>
					<DropdownToggle nav caret>{menu.top}</DropdownToggle>
					<DropdownMenu>
						{#each menu.dropdown as item}
						{#if item.label == "---"}
						<DropdownItem divider />
						{:else}
						<DropdownItem href={item.href || '#'}>
							{item.label}
					</DropdownItem>
					 {/if}
				{/each}
				</DropdownMenu>
				</Dropdown>
				{/if}
				 {/each}
			</Nav>
{/snippet}

<Styles />
<div class="navbar-container">
	<Navbar color="light" light container="lg" expand="md">
		<NavbarBrand  href="/">
			<img src={brand.brandImgLink} alt={brand.brandName} />
		</NavbarBrand>
		<div class="hidden lg:block">
			{@render nav()}
		</div>
			<div class="lg:hidden">
				<Dropdown>
					<DropdownToggle nav>
						<svg width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
							><path
								d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
							/></svg
						>
					</DropdownToggle>
					<DropdownMenu class="gap-2">
						{@render nav()}
					</DropdownMenu>
				</Dropdown>
			</div>
	</Navbar>
</div>