import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TweetContainer } from './tweet-container.js';
import { TweetHeader } from './tweet-header.js';
import { TweetInReplyTo } from './tweet-in-reply-to.js';
import { TweetBody } from './tweet-body.js';
import { TweetMedia } from './tweet-media.js';
import { TweetInfo } from './tweet-info.js';
import { TweetActions } from './tweet-actions.js';
import { TweetReplies } from './tweet-replies.js';
import { enrichTweet } from '../utils.js';
import { useMemo } from 'react';
export const EmbeddedTweet = ({ tweet: t, components })=>{
    var _tweet_mediaDetails;
    // useMemo does nothing for RSC but it helps when the component is used in the client (e.g by SWR)
    const tweet = useMemo(()=>enrichTweet(t), [
        t
    ]);
    return /*#__PURE__*/ _jsxs(TweetContainer, {
        children: [
            /*#__PURE__*/ _jsx(TweetHeader, {
                tweet: tweet,
                components: components
            }),
            tweet.in_reply_to_status_id_str && /*#__PURE__*/ _jsx(TweetInReplyTo, {
                tweet: tweet
            }),
            /*#__PURE__*/ _jsx(TweetBody, {
                tweet: tweet
            }),
            ((_tweet_mediaDetails = tweet.mediaDetails) == null ? void 0 : _tweet_mediaDetails.length) ? /*#__PURE__*/ _jsx(TweetMedia, {
                tweet: tweet,
                components: components
            }) : null,
            /*#__PURE__*/ _jsx(TweetInfo, {
                tweet: tweet
            }),
            /*#__PURE__*/ _jsx(TweetActions, {
                tweet: tweet
            }),
            /*#__PURE__*/ _jsx(TweetReplies, {
                tweet: tweet
            })
        ]
    });
};
