import { jsx as _jsx } from "react/jsx-runtime";
import { formatNumber } from '../utils.js';
import s from './tweet-replies.module.css';
export const TweetReplies = ({ tweet })=>/*#__PURE__*/ _jsx("div", {
        className: s.replies,
        children: /*#__PURE__*/ _jsx("a", {
            className: s.link,
            href: tweet.url,
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/ _jsx("span", {
                className: s.text,
                children: tweet.conversation_count === 0 ? 'Read more on Twitter' : tweet.conversation_count === 1 ? `Read ${formatNumber(tweet.conversation_count)} reply` : `Read ${formatNumber(tweet.conversation_count)} replies`
            })
        })
    });
