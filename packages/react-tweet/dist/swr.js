'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { EmbeddedTweet, TweetNotFound, TweetSkeleton } from './twitter-theme/components.js';
import { useTweet } from './hooks.js';
export const Tweet = ({ id, apiUrl, fallback = /*#__PURE__*/ _jsx(TweetSkeleton, {}), components, fetchOptions, onError })=>{
    const { data, error, isLoading } = useTweet(id, apiUrl, fetchOptions);
    if (isLoading) return fallback;
    if (error || !data) {
        var _components;
        const NotFound = ((_components = components) == null ? void 0 : _components.TweetNotFound) || TweetNotFound;
        return /*#__PURE__*/ _jsx(NotFound, {
            error: onError ? onError(error) : error
        });
    }
    return /*#__PURE__*/ _jsx(EmbeddedTweet, {
        tweet: data,
        components: components
    });
};
