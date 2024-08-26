'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import clsx from 'clsx';
import { getMediaUrl, getMp4Video } from '../utils.js';
import mediaStyles from './tweet-media.module.css';
import s from './tweet-media-video.module.css';
export const TweetMediaVideo = ({ tweet, media })=>{
    const [playButton, setPlayButton] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [ended, setEnded] = useState(false);
    const mp4Video = getMp4Video(media);
    let timeout = 0;
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("video", {
                className: mediaStyles.image,
                poster: getMediaUrl(media, 'small'),
                controls: !playButton,
                muted: true,
                preload: "metadata",
                tabIndex: playButton ? -1 : 0,
                onPlay: ()=>{
                    if (timeout) window.clearTimeout(timeout);
                    if (!isPlaying) setIsPlaying(true);
                    if (ended) setEnded(false);
                },
                onPause: ()=>{
                    // When the video is seeked (moved to a different timestamp), it will pause for a moment
                    // before resuming. We don't want to show the message in that case so we wait a bit.
                    if (timeout) window.clearTimeout(timeout);
                    timeout = window.setTimeout(()=>{
                        if (isPlaying) setIsPlaying(false);
                        timeout = 0;
                    }, 100);
                },
                onEnded: ()=>{
                    setEnded(true);
                },
                children: /*#__PURE__*/ _jsx("source", {
                    src: mp4Video.url,
                    type: mp4Video.content_type
                })
            }),
            playButton && /*#__PURE__*/ _jsx("button", {
                type: "button",
                className: s.videoButton,
                "aria-label": "View video on Twitter",
                onClick: (e)=>{
                    const video = e.currentTarget.previousSibling;
                    e.preventDefault();
                    setPlayButton(false);
                    setIsPlaying(true);
                    video.play();
                    video.focus();
                },
                children: /*#__PURE__*/ _jsx("svg", {
                    viewBox: "0 0 24 24",
                    className: s.videoButtonIcon,
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ _jsx("g", {
                        children: /*#__PURE__*/ _jsx("path", {
                            d: "M21 12L4 2v20l17-10z"
                        })
                    })
                })
            }),
            !isPlaying && !ended && /*#__PURE__*/ _jsx("div", {
                className: s.watchOnTwitter,
                children: /*#__PURE__*/ _jsx("a", {
                    href: tweet.url,
                    className: s.anchor,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: playButton ? 'Watch on Twitter' : 'Continue watching on Twitter'
                })
            }),
            ended && /*#__PURE__*/ _jsx("a", {
                href: tweet.url,
                className: clsx(s.anchor, s.viewReplies),
                target: "_blank",
                rel: "noopener noreferrer",
                children: "View replies"
            })
        ]
    });
};
