<script module>
</script>

<script lang="ts">
	let { searchactions } = $props();
	import {
		Container,
		Row,
		Col,
		Dropdown,
		DropdownItem,
		DropdownToggle,
		DropdownMenu,
		Icon,
		Input,
		InputGroup,
		InputGroupText
	} from '@sveltestrap/sveltestrap';
	import { Styles } from '@sveltestrap/sveltestrap';
</script>

<Styles />
<div class="search-container">
	<Container>
		<Row class="justify-content-center">
			<Col md="8" lg="6">
				<span class="search-wrapper">
					<InputGroup>
						<InputGroupText class="input-group-prepend">
							<Dropdown>
								<DropdownToggle nav caret>{searchactions.menu.top}</DropdownToggle>
								<DropdownMenu>
									{#each searchactions.menu.dropdown as item}
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
						</InputGroupText>
						<Input placeholder={searchactions.placeholder} class="search-input" />
					</InputGroup>
				</span>
			</Col>
		</Row>
	</Container>
</div>

<style>
	.search-container {
		padding: 1.5rem 0;
		margin: 1rem 0 2rem;
	}

	.search-wrapper {
		display: block;
		width: 100%;
	}

	:global(.search-input) {
		height: 3rem;
		font-size: 1rem;
		padding-left: 1rem;
		border-top-right-radius: 6px !important;
		border-bottom-right-radius: 6px !important;
	}

	:global(.input-group-prepend) {
		border-top-left-radius: 6px !important;
		border-bottom-left-radius: 6px !important;
		background-color: #f8f9fa;
	}

	:global(.input-group) {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		border-radius: 6px;
	}
</style>
