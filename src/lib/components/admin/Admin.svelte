<script lang="ts">
  import { 
    Container, 
    Row, 
    Col, 
    Card, 
    CardBody, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Button, 
    Table 
  } from '@sveltestrap/sveltestrap';
  
  
  let startDate = '11/12/2020';
  let refreshInterval = '10';
  
  let newContributorUsername = '';
  export let contributors;
  $: totalContributors = contributors.length;
  
  function setStartDate() {
    // Handle set start date logic
    console.log('Start date set to:', startDate);
  }
  
  function setRefreshInterval() {
    // Handle set refresh interval logic
    console.log('Refresh interval set to:', refreshInterval);
  }
  
  function addContributor() {
    if (newContributorUsername.trim()) {
      contributors = [...contributors, {
        username: newContributorUsername.trim(),
        avatar: `https://via.placeholder.com/40x40/50E3C2/ffffff?text=${newContributorUsername.charAt(0).toUpperCase()}`
      }];
      newContributorUsername = '';
    }
  }
  
  function removeContributor(index : number) {
    contributors = contributors.filter((_, i) => i !== index);
  }
</script>

<Container fluid class="px-5 py-4" style="background-color: #f8f9fa;">
  <Row>
    <Col>
      
      <Card class="mb-4 shadow-sm border-0">
        <CardBody class="p-4">
          <h3 class="management-section-title mb-4">General</h3>
          
          <Form>
            <FormGroup class="row align-items-center mb-3">
              <Label class="col-sm-3 col-form-label management-label">Start Date:</Label>
              <div class="col-sm-6">
                <Input 
                  type="date" 
                  bind:value={startDate}
                  class="management-input"
                />
              </div>
              <div class="col-sm-3">
                <Button 
                  color="outline-secondary" 
                  size="sm"
                  on:click={setStartDate}
                  class="management-btn"
                >
                  Set
                </Button>
              </div>
            </FormGroup>
            
            <FormGroup class="row align-items-center">
              <Label class="col-sm-3 col-form-label management-label">Refresh Interval:</Label>
              <div class="col-sm-4">
                <Input 
                  type="number" 
                  bind:value={refreshInterval}
                  class="management-input"
                />
              </div>
              <div class="col-sm-2">
                <span class="management-text">second(s)</span>
              </div>
              <div class="col-sm-3">
                <Button 
                  color="outline-secondary" 
                  size="sm"
                  on:click={setRefreshInterval}
                  class="management-btn"
                >
                  Set
                </Button>
              </div>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
      
      
      <Card class="shadow-sm border-0">
        <CardBody class="p-4">
          <h3 class="management-section-title mb-4">Contributors Management</h3>
          
          
          <Form class="mb-4">
            <FormGroup class="row align-items-center">
              <Label class="col-sm-3 col-form-label management-label">Add contributor by:</Label>
              <div class="col-sm-6">
                <Input 
                  type="text" 
                  placeholder="GitHub username"
                  bind:value={newContributorUsername}
                  class="management-input"
                />
              </div>
              <div class="col-sm-3">
                <Button 
                  color="outline-secondary" 
                  size="sm"
                  on:click={addContributor}
                  class="management-btn"
                >
                  Add
                </Button>
              </div>
            </FormGroup>
          </Form>
          
          
          <div class="management-table-container">
            <div class="d-flex align-items-center mb-3">
              <span class="management-total">Total: {totalContributors}</span>
            </div>
            
            <Table hover class="management-table">
              <thead>
                <tr>
                  <th class="management-table-header" style="width: 80px;"></th>
                  <th class="management-table-header">Username</th>
                  <th class="management-table-header text-center">Operation</th>
                </tr>
              </thead>
              <tbody>
                {#each contributors as contributor, index}
                  <tr class="management-table-row">
                    <td class="py-3">
                      <img 
                        src={contributor.avatar} 
                        alt={contributor.username}
                        class="rounded"
                        width="40"
                        height="40"
                      />
                    </td>
                    <td class="py-3">
                      <a 
                        href="#{contributor.username}" 
                        class="management-username"
                      >
                        {contributor.username}
                      </a>
                    </td>
                    <td class="py-3 text-center">
                      <Button 
                        color="outline-secondary" 
                        size="sm"
                        on:click={() => removeContributor(index)}
                        class="management-remove-btn"
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  </Row>
</Container>

<style>
  :global(.management-section-title) {
    color: #2f343d;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  
  :global(.management-label) {
    color: #2f343d;
    font-weight: 600;
    font-size: 0.9rem;
  }
  
  :global(.management-text) {
    color: #6c757d;
    font-size: 0.9rem;
  }
  
  :global(.management-input) {
    border: 1px solid #dee2e6;
    border-radius: 0.375rem;
    font-size: 0.9rem;
    padding: 0.5rem 0.75rem;
  }
  
  :global(.management-input:focus) {
    border-color: #dc3545;
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
  }
  
  :global(.management-btn) {
    border: 1px solid #dee2e6;
    color: #6c757d;
    background-color: #f8f9fa;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.375rem 1rem;
  }
  
  :global(.management-btn:hover) {
    background-color: #e9ecef;
    border-color: #adb5bd;
  }
  
  :global(.management-total) {
    color: #2f343d;
    font-weight: 600;
    font-size: 1rem;
  }
  
  :global(.management-table-container) {
    background-color: #fff;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  
  :global(.management-table) {
    margin-bottom: 0;
  }
  
  :global(.management-table-header) {
    background-color: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
    color: #2f343d;
    font-weight: 600;
    font-size: 0.875rem;
    padding: 0.75rem;
  }
  
  :global(.management-table-row:hover) {
    background-color: rgba(47, 52, 61, 0.03);
  }
  
  :global(.management-username) {
    color: #1d74f5;
    text-decoration: none;
    font-weight: 500;
  }
  
  :global(.management-username:hover) {
    color: #b02a37;
    text-decoration: underline;
  }
  
  :global(.management-remove-btn) {
    font-size: 0.8rem;
    padding: 0.25rem 0.75rem;
  }
</style>