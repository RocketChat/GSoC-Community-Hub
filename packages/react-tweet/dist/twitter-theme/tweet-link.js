import { jsx as _jsx } from "react/jsx-runtime";
import s from './tweet-link.module.css';
export const TweetLink = ({ href, children })=>/*#__PURE__*/ _jsx("a", {
        href: href,
        className: s.root,
        target: "_blank",
        rel: "noopener noreferrer",
        children: children
    });
