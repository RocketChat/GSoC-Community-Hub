<script lang="ts">
   import { brand } from "../../../../src/brand";
    import { menutree } from "../../../../src/menutree";
    import Menubar from '$lib/components/menubar/Menubar.svelte';
    import EmbeddedChat from "$lib/components/embeddedchat/EmbeddedChat.svelte";
</script>

<Menubar {brand} {menutree} />
<EmbeddedChat />