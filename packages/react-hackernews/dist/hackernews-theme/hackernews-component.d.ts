import React from 'react';
import { postsType } from '../api';
export default function HackerNewsComponent({ posts, styleOverrides }: {
    posts: postsType;
    styleOverrides?: {
        main?: string;
        container?: string;
        tabs?: string;
        tabsList?: string;
        tabsContent?: string;
    };
}): React.JSX.Element;
