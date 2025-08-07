<script lang="ts">
   import { brand } from "../../../../src/brand";
 import { menutree } from "../../../../src/menutree";
 import { _67b98509f520fb810c9c7265 } from "../../../../build/_67b98509f520fb810c9c7265";
  import Menubar from '$lib/components/menubar/Menubar.svelte';
import EmbeddedChat from '$lib/components/embeddedchat/EmbeddedChat.svelte';
</script>

<Menubar {brand} {menutree} />
<EmbeddedChat threadsList={_67b98509f520fb810c9c7265}/>
