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
		DropdownItem
	} from '@sveltestrap/sveltestrap';

	import { Styles } from '@sveltestrap/sveltestrap';
</script>

<Styles />
<div>
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
				<DropdownItem>
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
