<script module>
</script>

<script lang="ts">
	let { leftlink, rightlink } = $props();

	import {
		Container,
		Row,
		Col,
	} from '@sveltestrap/sveltestrap';
	import { Styles } from '@sveltestrap/sveltestrap';
</script>
<style>
    p { text-align: center; }
</style>
<Styles />
<div>
	<Container>
		<Row>
            <Col>
				<p>{leftlink} | {rightlink}</p>
            </Col>
		</Row>
	</Container>
</div>
