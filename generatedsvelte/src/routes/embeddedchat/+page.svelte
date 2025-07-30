<script lang="ts">
   import { brand } from "../../../../src/brand";
    import { menutree } from "../../../../src/menutree";
    import Menubar from '$lib/components/menubar/Menubar.svelte';
    import { threadsList } from "../../../../build/threadsList"
    import EmbeddedChat from "$lib/components/embeddedchat/EmbeddedChat.svelte";
</script>

<Menubar {brand} {menutree} />
<EmbeddedChat threadList={threadsList}/>