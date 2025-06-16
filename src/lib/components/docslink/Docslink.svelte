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
    .links-container {
      padding: 0.5rem 0 1rem; /* Reduced top padding, maintained bottom padding */
      font-size: 1.1rem; /* Increased from 0.95rem to 1.1rem for better balance */
    }
    .links-text { 
        text-align: center;
        color: #555;
    }
    .links-text a {
        text-decoration: none;
        color: #0066cc;
        transition: color 0.2s ease;
    }
    .links-text a:hover {
        color: #004080;
        text-decoration: underline;
    }
    .separator {
        display: inline-block;
        margin: 0 0.5rem;
        color: #aaa;
    }
</style>
<Styles />
<div class="links-container">
	<Container>
		<Row>
            <Col>
				<p class="links-text">{leftlink} <span class="separator">|</span> {rightlink}</p>
            </Col>
		</Row>
	</Container>
</div>
