<script lang="ts">
   import { Table, Container, Row, Col } from '@sveltestrap/sveltestrap';
	export let contributorData: Array<{
        avatar: string,
        username: string,
        openPRs: number,
        mergedPRs: number,
        issues: number,
	}>;
</script>

<Container fluid class="p-4">
  <Row>
    <Col>
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="display-4 text-muted mb-0">Contributors</h2>
            <small class="text-muted">Last Updated: 5 mins ago </small>
         </div>
      <div class="bg-white rounded shadow-sm">
        <Table hover responsive class="mb-0">
          <thead class="bg-light">
            <tr>
              <th class="border-0 py-3 ps-4 text-muted fw-semibold">Username</th>
              <th class="border-0 py-3 text-center text-primary fw-semibold">Open PRs</th>
              <th class="border-0 py-3 text-center text-primary fw-semibold">Merged PRs</th>
              <th class="border-0 py-3 text-center text-primary fw-semibold pe-4">Issues</th>
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
                  <span class="text-primary fw-medium">{contributor.openPRs}</span>
                </td>
                <td class="text-center py-3">
                  <span class="text-primary fw-medium">{contributor.mergedPRs}</span>
                </td>
                <td class="text-center py-3 pe-4">
                  <span class="text-primary fw-medium">{contributor.issues}</span>
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