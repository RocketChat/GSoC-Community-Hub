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
<div class="personas-container">
	<Container>
		<Row class="justify-content-center">
			<Col xs="6" sm="3">  
        <span class="persona">
        <div class="svg">
          <img src={images[0]} class="d-block w-100" alt="Admin"/>
          </div>
          <div class="title">{personas[0]}</div>
        </span>
			</Col>
      <Col xs="6" sm="3">
        <span class="persona">
        <div class="svg"> <img src={images[1]} class="d-block w-100" alt="Developer"/></div>
        <div class="title">{personas[1]}</div>
        </span>
			</Col>
			<Col xs="6" sm="3">
      <span class="persona">
        <div class="svg"><img src={images[2]} class="d-block w-100" alt="Group Chat"/></div>
        <div class="title">{personas[2]}</div>
      </span>
			</Col>
      <Col xs="6" sm="3">
        <span class="persona">
          <div class="svg"><img src={images[3]} class="d-block w-100" alt="GSoC"/></div>
          <div class="title">{personas[3]}</div>
        </span>
			</Col>
		</Row>
	</Container>
</div>

<style>
.personas-container {
  padding: 2rem 0;
  margin: 1rem 0 2.5rem;
}

.persona {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0.5rem;
  transition: transform 0.2s ease;
}

.persona:hover {
  transform: translateY(-5px);
}

.svg {
  width: clamp(3.5rem, 5vw, 5rem);
  height: auto;
  margin-bottom: 0.5rem;
}

.svg img {
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.title {
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  font-weight: 500;
  text-align: center;
  color: #333;
}
</style>