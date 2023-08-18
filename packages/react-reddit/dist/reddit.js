import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { getRedditPosts } from './api/index.js';
import RedditComponent from './reddit-theme/reddit-component.js';
const RedditContent = async ({ id, styleOverrides })=>{
    const posts = await getRedditPosts(id);
    return /*#__PURE__*/ _jsx(RedditComponent, {
        posts: posts
    });
};
export const Reddit = ({ ...props })=>/*#__PURE__*/ _jsx(Suspense, {
        children: /*#__PURE__*/ _jsx(RedditContent, {
            ...props
        })
    });
