"use client"
import React, { useEffect, useState } from 'react';
import Script from 'next/script';

declare global {
    interface Window {
        WidgetBot: any;
    }
}

interface WidgetBotProps {
    serverId: string;
    channelId: string;
}

const DiscordComponent: React.FC<WidgetBotProps> = ({ serverId, channelId }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(typeof window !== 'undefined');
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <Script
            src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3"
            onLoad={() => {
                new (window as any).Crate({
                    server: serverId,
                    channel: channelId,
                });
            }}
        />
    );
};

export default DiscordComponent;