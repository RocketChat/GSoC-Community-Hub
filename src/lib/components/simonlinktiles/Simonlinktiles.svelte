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
<div>
	<Container>
    {#each tilelinks as tilerow, i}
    <Row>
      {#each tilelinks[i] as item}
      <Col>
       <Card body>
         <b>{item.title}</b>
         <p>{item.desc}</p>
       </Card>
     </Col>
    {/each}
    </Row>
     {/each}
	</Container>
</div>


}