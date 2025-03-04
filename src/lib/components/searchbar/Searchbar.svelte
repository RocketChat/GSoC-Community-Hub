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
<div>
	<Container>
		<Row>
			<Col>
				<span class="center">
					<InputGroup>
						<InputGroupText>
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
						<Input placeholder={searchactions.placeholder} />
					</InputGroup>
				</span>
			</Col>
		</Row>
	</Container>
</div>

<style>
	span.center {
		text-align: center;
	}
</style>
