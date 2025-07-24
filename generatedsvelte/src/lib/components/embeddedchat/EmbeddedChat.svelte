<script lang="ts">
    import { 
        Box,
        Heading,
        Avatar,
        Input,
        Icon
    } from '@embeddedchat/ui-elements';
    import { sveltify } from "svelte-preprocess-react";

    const react = sveltify(
        {  
            Box, 
            Heading,
            Avatar,
            Input,
            Icon
        }
    );

    let isFullscreen = false;

    function toggleFullscreen() {
        isFullscreen = !isFullscreen;
    }

</script>

<react.Box class={isFullscreen ? "chat-container fullscreen" : "chat-container"}>
    <react.Box class="chat-header">
        <react.Heading level={3} class="channel-name">
            <!-- channel name (fetched from API) -->
            #general 
        </react.Heading>
        <react.Box class="header-actions">
            <react.Icon name="expand" size="32px" class="header-icon" onClick={toggleFullscreen} />
        </react.Box>
    </react.Box>

    <react.Box class="messages-container">
        <!-- render top threads accordingly -->
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
                    <react.Box is="span" class="username">Zishan Ahmad</react.Box>
                    <react.Box is="span" class="timestamp">10:30 PM</react.Box>
                </react.Box>
                <react.Box class="message-body">
                    <react.Box class="message-text">
                        Heyyy there
                    </react.Box>
                </react.Box>
            </react.Box>
        </react.Box>
    </react.Box>

    <react.Box class="login-container">
        <react.Box class="login-text">Login to RocketChat to join the conversation!</react.Box>
    </react.Box>
</react.Box>


<style>
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
        background-color: #8b5cf6;
        color: white;
        flex-shrink: 0;
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

    :global(.username) {
        font-weight: 600;
        color: #2f3349;
        font-size: 0.9rem;
    }

    :global(.user-badge) {
        font-size: 0.75rem;
        padding: 0.125rem 0.375rem;
        border-radius: 0.25rem;
        font-weight: 500;
    }

    :global(.user-badge) {
        background-color: #fef3c7;
        color: #92400e;
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
        margin-bottom: 0.25rem;
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