import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { getHackerNewsPosts } from './api/index.js';
import HackerNewsComponent from './hackernews-theme/hackernews-component.jsx';
const HackerNewsContent = async ({ id, styleOverrides })=>{
    const posts = await getHackerNewsPosts(id);
    return /*#__PURE__*/ _jsx(HackerNewsComponent, {
        posts: posts,
        styleOverrides: styleOverrides
    });
};
export const Hacker = ({ ...props })=>/*#__PURE__*/ _jsx(Suspense, {
        children: /*#__PURE__*/ _jsx(HackerNewsContent, {
            ...props
        })
    });
