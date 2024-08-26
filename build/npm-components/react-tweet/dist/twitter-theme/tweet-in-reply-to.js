import { jsxs as _jsxs } from "react/jsx-runtime";
import s from './tweet-in-reply-to.module.css';
export const TweetInReplyTo = ({ tweet })=>/*#__PURE__*/ _jsxs("a", {
        href: tweet.in_reply_to_url,
        className: s.root,
        target: "_blank",
        rel: "noopener noreferrer",
        children: [
            "Replying to @",
            tweet.in_reply_to_screen_name
        ]
    });
