'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import format from 'date-fns/format/index.js';
import { useMounted } from '../hooks.js';
import s from './tweet-info-created-at.module.css';
export const TweetInfoCreatedAt = ({ tweet })=>{
    const mounted = useMounted();
    // If the date is displayed immediately, it will produce a server/client mismatch because the date
    // format will change depending on the user's browser. If the format were to be simplified to
    // something like "MMM d, y", then you could use the server date.
    const createdAt = typeof window !== 'undefined' && mounted ? new Date(tweet.created_at) : null;
    return !createdAt ? null : /*#__PURE__*/ _jsx("a", {
        className: s.root,
        href: tweet.url,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": format(createdAt, 'h:mm a · MMM d, y'),
        children: /*#__PURE__*/ _jsx("time", {
            dateTime: createdAt.toISOString(),
            children: format(createdAt, 'h:mm a · MMM d, y')
        })
    });
};
