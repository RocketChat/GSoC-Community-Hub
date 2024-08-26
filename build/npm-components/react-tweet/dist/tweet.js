import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { getTweet } from './api/index.js';
import { EmbeddedTweet, TweetNotFound, TweetSkeleton } from './twitter-theme/components.js';
const TweetContent = async ({ id, components, fetchOptions, onError })=>{
    let error;
    const tweet = id ? await getTweet(id, fetchOptions).catch((err)=>{
        if (onError) {
            error = onError(err);
        } else {
            console.error(err);
            error = err;
        }
    }) : undefined;
    if (!tweet) {
        var _components;
        const NotFound = ((_components = components) == null ? void 0 : _components.TweetNotFound) || TweetNotFound;
        return /*#__PURE__*/ _jsx(NotFound, {
            error: error
        });
    }
    return /*#__PURE__*/ _jsx(EmbeddedTweet, {
        tweet: tweet,
        components: components
    });
};
export const Tweet = ({ fallback = /*#__PURE__*/ _jsx(TweetSkeleton, {}), ...props })=>/*#__PURE__*/ _jsx(Suspense, {
        fallback: fallback,
        children: /*#__PURE__*/ _jsx(TweetContent, {
            ...props
        })
    });
