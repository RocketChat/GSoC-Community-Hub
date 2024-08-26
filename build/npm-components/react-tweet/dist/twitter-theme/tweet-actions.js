import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { formatNumber } from '../utils.js';
import { TweetActionsCopy } from './tweet-actions-copy.js';
import s from './tweet-actions.module.css';
export const TweetActions = ({ tweet })=>{
    const favoriteCount = formatNumber(tweet.favorite_count);
    return /*#__PURE__*/ _jsxs("div", {
        className: s.actions,
        children: [
            /*#__PURE__*/ _jsxs("a", {
                className: s.like,
                href: tweet.like_url,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": `Like. This Tweet has ${favoriteCount} likes`,
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: s.likeIconWrapper,
                        children: /*#__PURE__*/ _jsx("svg", {
                            viewBox: "0 0 24 24",
                            className: s.likeIcon,
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ _jsx("g", {
                                children: /*#__PURE__*/ _jsx("path", {
                                    d: "M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("span", {
                        className: s.likeCount,
                        children: favoriteCount
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("a", {
                className: s.reply,
                href: tweet.reply_url,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Reply to this Tweet on Twitter",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: s.replyIconWrapper,
                        children: /*#__PURE__*/ _jsx("svg", {
                            viewBox: "0 0 24 24",
                            className: s.replyIcon,
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ _jsx("g", {
                                children: /*#__PURE__*/ _jsx("path", {
                                    d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("span", {
                        className: s.replyText,
                        children: "Reply"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(TweetActionsCopy, {
                tweet: tweet
            })
        ]
    });
};
