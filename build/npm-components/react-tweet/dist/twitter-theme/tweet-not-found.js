import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TweetContainer } from './tweet-container.js';
import styles from './tweet-not-found.module.css';
export const TweetNotFound = (_props)=>/*#__PURE__*/ _jsx(TweetContainer, {
        children: /*#__PURE__*/ _jsxs("div", {
            className: styles.root,
            children: [
                /*#__PURE__*/ _jsx("h3", {
                    children: "Tweet not found"
                }),
                /*#__PURE__*/ _jsx("p", {
                    children: "The embedded tweet could not be found…"
                })
            ]
        })
    });
