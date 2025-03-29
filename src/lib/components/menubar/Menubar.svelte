<script lang="ts">
	import {
		Navbar,
		NavbarBrand,
		Nav,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem
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
			 {/each}
		</Nav>
	</Navbar>
</div>