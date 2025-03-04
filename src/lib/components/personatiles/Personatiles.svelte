<script module>
</script>

<script lang="ts">
  let { caption, personas, images } = $props();
	import {
		Container,
		Row,
		Col,

	} from '@sveltestrap/sveltestrap';
	import { Styles } from '@sveltestrap/sveltestrap';

</script>

<Styles />
<div>
	<Container>
		<Row>
			<Col>  
        <span class="persona">
        <div class="svg">
          <img src={images[0]} class="d-block w-100" alt="Admin"/>
          </div>
          <div class="title">{personas[0]}</div>
        </span>
  
			</Col>
      <Col>
        <span class="persona">
        <div class="svg"> <img src={images[1]} class="d-block w-100" alt="Developer"/></div>
        <div class="title">{personas[1]}</div>
        </span>
			</Col>
			<Col>
      <span class="persona">
        <div class="svg"><img src={images[2]} class="d-block w-100" alt="Group Chat"/></div>
        <div class="title">{personas[2]}</div>
      </span>
			</Col>
      <Col>
        <span class="persona">
          <div class="svg"><img src={images[3]} class="d-block w-100" alt="GSoC"/></div>
          <div class="title">{personas[3]}</div>
        </span>
			</Col>
		</Row>
	</Container>
</div>

<style>

.persona {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: clamp(8rem, 14vw, 20rem);
  margin: 0.2rem;
  padding-bottom: 1rem;
}
.svg {
  width: clamp(3rem, 4vw, 4rem);
}
.title {
  font-size: clamp(0.9rem, 2vw, 1.4rem);
}

</style>
