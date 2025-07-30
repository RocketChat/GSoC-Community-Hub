<script lang="ts">
    import { 
        Box,
        Heading,
        Avatar,
        Input,
        Icon,
        Button
    } from '@embeddedchat/ui-elements';
    import { sveltify } from "svelte-preprocess-react";
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    import type { Threads } from '$lib/util/fetchThreads';
    export let threadList: Array<Threads>;
    let threads = threadList;
    const react = sveltify(
        {  
            Box, 
            Heading,
            Avatar,
            Input,
            Icon,
            Button
        }
    );
    const CHANNEL_NAME = "workshopthreads";
    let isFullscreen = false;

    function toggleFullscreen() {
        isFullscreen = !isFullscreen;
    }

    function formatDateTime(timestamp: string): string {
        const date = new Date(timestamp);
        return date.toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }

</script>

<react.Box class={isFullscreen ? "chat-container fullscreen" : "chat-container"}>
    <react.Box class="chat-header">
        <react.Heading level={3} class="channel-name">
            #{CHANNEL_NAME}
        </react.Heading>
        <react.Box class="header-actions">
            <react.Icon name="expand" size="32px" class="header-icon" onClick={toggleFullscreen} />
        </react.Box>
    </react.Box>

    <react.Box class="messages-container">
        <!-- render top threads accordingly -->
        {#each threads as thread}
            {#if thread.message}
                <react.Box class="message-item">
                    <react.Avatar 
                        url=""
                        alt="user-avatar"
                        size="2.25rem"
                        fallbackIcon=""
                        class="message-avatar"
                    />
                    <react.Box class="message-content">
                        <react.Box class="message-header">
                            <react.Box is="span">
                                <react.Box is="span" class="thread-owner-name">{thread.name}</react.Box>
                                <react.Box is="span" class="thread-owner-username">@{thread.username}</react.Box>
                            </react.Box>
                            
                            <react.Box is="span" class="timestamp">{formatDateTime(thread.timestamp)}</react.Box>
                        </react.Box>
                        <react.Box class="message-body">
                            <react.Box class="message-text">
                                {thread.message}
                            </react.Box>
                            <react.Box class="thread-actions">
                                <react.Button size="small" class="view-thread-btn">
                                    <a href="{BASE_URL}/channel/{CHANNEL_NAME}/thread/{thread.id}" target="_blank">
                                        View thread
                                    </a>
                                </react.Button>
                                <react.Box is="span" class="thread-count">{thread.tcount} replies</react.Box>
                            </react.Box>
                        </react.Box>
                    </react.Box>
                </react.Box>
            {/if}
        {/each}
    </react.Box>

    <react.Box class="login-container">
        <react.Box class="login-text">Login to RocketChat to join the conversation!</react.Box>
    </react.Box>
</react.Box>


<style>
    a{
        text-decoration: none;
        color: white;
    }

    :global(.chat-container) {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background-color: #f5f5f5;
    }

    :global(.chat-container.fullscreen) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999;
    }

    :global(.chat-header) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.75rem 1rem;
        background-color: #f0f0f0;
        border-bottom: 1px solid #e0e0e0;
        min-height: 3rem;
        box-sizing: border-box;
    }

    :global(.channel-name) {
        font-size: 1rem;
        font-weight: 400;
        color: #333;
        margin: 0;
    }

    :global(.header-actions) {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    :global(.header-icon) {
        color: #666;
        cursor: pointer;
        padding: 0.25rem;
    }

    :global(.header-icon:hover) {
        color: #333;
    }

    :global(.messages-container) {
        flex: 1;
        overflow-y: auto;
        padding: 1rem;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
    }

    :global(.message-item) {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        margin-bottom: 1.5rem;
    }

    :global(.message-avatar) {
        background-color: #2f3349;
        color: white;
        flex-shrink: 0;
        border: none;
    }

    :global(.message-content) {
        flex: 1;
        min-width: 0;
    }

    :global(.message-header) {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.25rem;
    }

    :global(.thread-owner-username) {
        color: #2f3349;
        font-size: 0.75rem;
    }

    :global(.thread-owner-name) {
        font-weight: 600;
        color: #2f3349;
        font-size: 0.9rem;
    }

    :global(.timestamp) {
        font-size: 0.75rem;
        color: #6b7280;
        margin-left: auto;
    }

    :global(.message-body) {
        color: #374151;
        line-height: 1.5;
    }

    :global(.message-text) {
        margin-bottom: 0.5rem;
    }

    :global(.thread-actions) {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.25rem;
    }

    :global(.view-thread-btn) {
        background-color: #4a5568;
        color: white;
        border: none;
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
        border-radius: 0.25rem;
        cursor: pointer;
    }

    :global(.view-thread-btn:hover) {
        background-color: #718096;
    }

    :global(.thread-count) {
        font-size: 0.75rem;
        color: #6b7280;
    }

    :global(.login-container) {
        padding: 1rem;
        background-color: #f9f9f9;
        border-top: 1px solid #e0e0e0;
        display: flex;
        align-items: center;
    }

    :global(.login-text) {
        color: #666;
        font-size: 0.9rem;
    }
</style>