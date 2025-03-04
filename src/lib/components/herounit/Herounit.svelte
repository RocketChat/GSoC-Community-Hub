<script module>
</script>

<script lang="ts">

	let { title, subtitle } = $props();
	import {
		Container,
		Row,
		Col,
	} from '@sveltestrap/sveltestrap';
	import { Styles } from '@sveltestrap/sveltestrap';
</script>
<style>
    h1 { text-align: center; }
    p { text-align: center; }
</style>
<Styles />
<div>
	<Container>
		<Row>
			<Col>
				<!-- TODO: need to sanitize title to avoid XSS -->
                 <h1>{@html title}</h1>
			</Col>
		</Row>
		<Row>
            <Col>
				<p>{subtitle}</p>
            </Col>
		</Row>
	</Container>
</div>
