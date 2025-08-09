```svelte

<script>
    const leftlink = "Read the Guides";
    const rightlink = "Read Release Notes";
</script>

use Docslink from $lib/components/docslink/Docslink.svelte

get leftlink
get rightlink

<main>

<Docslink {leftlink} {rightlink}/>

</main>

```