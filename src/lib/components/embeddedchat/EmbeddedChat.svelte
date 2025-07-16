<script lang="ts">
	import { createElement } from 'react';
	import { createRoot } from 'react-dom/client';
	import type { EmbeddedChatProps } from '@embeddedchat/react';

	let props: EmbeddedChatProps = $props();
	let rootEl: HTMLElement;

	$effect(() => {
		const root = createRoot(rootEl);

		import('@embeddedchat/react').then(({ EmbeddedChat }) => {
			const embeddedchat = createElement(EmbeddedChat, { ...props });
			root.render(embeddedchat);
		});

		return () => root.unmount();
	});
</script>

<div bind:this={rootEl} class="root"></div>
