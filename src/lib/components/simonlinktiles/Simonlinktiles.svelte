<script module>
</script>

<script lang="ts">
  let { tilelinks } = $props();
  import {
    Container,
    Row,
    Col,
    Card,
  } from '@sveltestrap/sveltestrap';
  import { Styles } from '@sveltestrap/sveltestrap';
</script>

<Styles />
<div class="tiles-container">
  <Container fluid>
    {#each tilelinks as tilerow, i}
    <Row class="tiles-row justify-content-center">
      {#each tilelinks[i] as item}
      <Col xs="12" sm="6" md="4" lg="3" class="tile-col">
        <Card body class="tile-card">
          <h3 class="tile-title">{item.title}</h3>
          <p class="tile-desc">{item.desc}</p>
        </Card>
      </Col>
      {/each}
    </Row>
    {/each}
  </Container>
</div>

<style>
  .tiles-container {
    padding: 3rem 0;
    margin: 2rem auto;
    max-width: 1400px;
    width: 100%;
  }
  
  .tiles-row {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
  }
  
  .tile-col {
    margin-bottom: 2rem;
    padding: 0 1rem;
    display: flex;
  }
  
  :global(.tile-card) {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 6px 16px rgba(0,0,0,0.1);
    border: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: linear-gradient(to bottom right, #ffffff, #f8f9fa);
  }
  
  :global(.tile-card:hover) {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.15);
  }
  
  .tile-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .tile-desc {
    font-size: 1rem;
    color: #555;
    margin-bottom: 0;
    line-height: 1.6;
  }

  @media (max-width: 767px) {
    .tiles-container {
      padding: 2rem 1rem;
    }
    
    .tile-col {
      padding: 0 0.75rem;
      margin-bottom: 1.5rem;
    }
    
    :global(.tile-card) {
      padding: 1.5rem;
    }
  }
</style>