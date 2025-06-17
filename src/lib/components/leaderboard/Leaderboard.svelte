<script lang="ts">
  import { Table, Container, Row, Col, NavLink } from '@sveltestrap/sveltestrap';
  import type { Contributor } from '$lib/util/fetchContributors';
	export let contributorDataSortM: Array<Contributor>;
  export let contributorDataSortI: Array<Contributor>;
  export let contributorDataSortP: Array<Contributor>;
  export let contributorData: Array<Contributor> = contributorDataSortM;
  function sortContributor(sortParam?: string){
    if (sortParam === "p"){
      contributorData = contributorDataSortP;
    }else if(sortParam === "i"){
      contributorData = contributorDataSortI;
    }else{
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
      <div class="bg-white rounded shadow-sm">
        <Table hover responsive class="mb-0">
          <thead class="bg-light">
            <tr>
              <th class="border-0 py-3 ps-4 text-muted fw-semibold">Username</th>
              <th class="border-0 py-3 text-center text-primary fw-semibold">
                <NavLink on:click={() => sortContributor("p")}>Open PRs</NavLink>
              </th>
              <th class="border-0 py-3 text-center text-primary fw-semibold">
                <NavLink on:click={() => sortContributor()}>Merged PRs</NavLink>
              </th>
              <th class="border-0 py-3 text-center text-primary fw-semibold pe-4">
                <NavLink on:click={() => sortContributor("i")}>Issues</NavLink>
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
                      class="rounded me-3"
                      width="40"
                      height="40"
                    />
                    <a 
                      href="#{contributor.username}" 
                      class="text-primary text-decoration-none fw-medium"
                    >
                      {contributor.username}
                    </a>
                  </div>
                </td>
                <td class="text-center py-3">
                  <span class="text-primary fw-medium">{contributor.openPRsNumber}</span>
                </td>
                <td class="text-center py-3">
                  <span class="text-primary fw-medium">{contributor.mergedPRsNumber}</span>
                </td>
                <td class="text-center py-3 pe-4">
                  <span class="text-primary fw-medium">{contributor.issuesNumber}</span>
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