<script lang="ts">
	import { Table, Container, Row, Col, NavLink } from '@sveltestrap/sveltestrap';
	import type { Contributor } from '$lib/util/fetchContributors';
	export let contributorDataSortM: Array<Contributor>;
	export let contributorDataSortP: Array<Contributor>;
	export let contributorDataSortI: Array<Contributor>;
	export let contributorData: Array<Contributor> = contributorDataSortM;
	function sortContributor(sortParam?: string) {
		if (sortParam === 'p') {
			contributorData = contributorDataSortP;
		} else if (sortParam === 'i') {
			contributorData = contributorDataSortI;
		} else {
			contributorData = contributorDataSortM;
		}
	}

	$: totalContributors = contributorData.length;
</script>

<Container fluid class="p-4">
	<Row>
		<Col>
			<div class="d-flex justify-content-between align-items-center mb-4">
				<h2 class="display-4 text-muted mb-0">Contributors</h2>
				<small class="rocket-text-muted">Total Contributors: {totalContributors}</small>
			</div>
			<div class="rounded bg-white shadow-sm">
				<Table hover responsive class="mb-0">
					<thead class="bg-light">
						<tr>
							<th class="text-muted fw-semibold border-0 py-3 ps-4">Username</th>
							<th class="text-primary fw-semibold border-0 py-3 text-center">
								<NavLink on:click={() => sortContributor('p')}>Open PRs</NavLink>
							</th>
							<th class="text-primary fw-semibold border-0 py-3 text-center">
								<NavLink on:click={() => sortContributor()}>Merged PRs</NavLink>
							</th>
							<th class="text-primary fw-semibold border-0 py-3 pe-4 text-center">
								<NavLink on:click={() => sortContributor('i')}>Issues</NavLink>
							</th>
						</tr>
					</thead>
					<tbody>
						{#each contributorData as contributor}
							<tr class="align-middle">
								<td class="py-3 ps-4">
									<div class="d-flex align-items-center">
										<img
											src={contributor.avatar}
											alt={contributor.username}
											class="me-3 rounded"
											width="40"
											height="40"
										/>
										<a
											href="https://github.com/{contributor.username}"
											target="_blank"
											class="text-primary text-decoration-none fw-medium"
										>
											{contributor.username}
										</a>
									</div>
								</td>
								<td class="py-3 text-center">
									<span>
										<a
											href={contributor.openPRsLink}
											target="_blank"
											class="text-primary text-decoration-none fw-medium"
										>
										{contributor.openPRsNumber}
										</a>
									</span>
								</td>
								<td class="py-3 text-center">
									<span>
										<a
											href={contributor.mergedPRsLink}
											target="_blank"
											class="text-primary text-decoration-none fw-medium"
										>
										{contributor.mergedPRsNumber}
										</a>
									</span>
								</td>
								<td class="py-3 pe-4 text-center">
									<span>
										<a
											href={contributor.issuesLink}
											target="_blank"
											class="text-primary text-decoration-none fw-medium"
										>
										{contributor.issuesNumber}
										</a>
									</span>
								</td>
							</tr>
						{/each}
					</tbody>
				</Table>
			</div>
		</Col>
	</Row>
</Container>

<style>
	:global(.table th) {
		font-size: 0.875rem;
		letter-spacing: 0.025em;
	}

	:global(.table td) {
		font-size: 0.875rem;
	}

	:global(.table tbody tr:hover) {
		background-color: rgba(0, 123, 255, 0.05) !important;
	}

	:global(.text-primary) {
		color: #1d74f5 !important;
	}

	:global(.bg-light) {
		background-color: #f8f9fa !important;
	}
</style>
