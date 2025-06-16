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
    .hero-container {
        padding: 3rem 0;
        margin-bottom: 2rem;
    }
    h1 { 
        text-align: center; 
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 700;
        margin-bottom: 1.5rem;
        line-height: 1.2;
    }
    .subtitle { 
        text-align: center;
        font-size: clamp(1rem, 2.5vw, 1.25rem);
        font-weight: 400;
        color: #555;
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.6;
    }
</style>
<Styles />
<div class="hero-container">
	<Container>
		<Row>
			<Col>
				<!-- TODO: need to sanitize title to avoid XSS -->
                <h1>{@html title}</h1>
			</Col>
		</Row>
		<Row>
            <Col>
				<p class="subtitle">{subtitle}</p>
            </Col>
		</Row>
	</Container>
</div>