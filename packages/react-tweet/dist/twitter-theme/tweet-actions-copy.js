'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import s from './tweet-actions.module.css';
export const TweetActionsCopy = ({ tweet })=>{
    const [copied, setCopied] = useState(false);
    const [copyAllText, setCopyAltText] = useState(false);
    const handleCopy = ()=>{
        navigator.clipboard.writeText(tweet.url);
        setCopied(true);
    };
    useEffect(()=>{
        if (copied) {
            const timeout = setTimeout(()=>{
                setCopied(false);
                setCopyAltText(true);
            }, 6000);
            return ()=>clearTimeout(timeout);
        }
    }, [
        copied
    ]);
    return /*#__PURE__*/ _jsxs("button", {
        type: "button",
        className: s.copy,
        "aria-label": "Copy link",
        onClick: handleCopy,
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: s.copyIconWrapper,
                children: copied ? /*#__PURE__*/ _jsx("svg", {
                    viewBox: "0 0 24 24",
                    className: s.copyIcon,
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ _jsx("g", {
                        children: /*#__PURE__*/ _jsx("path", {
                            d: "M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                        })
                    })
                }) : /*#__PURE__*/ _jsx("svg", {
                    viewBox: "0 0 24 24",
                    className: s.copyIcon,
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ _jsx("g", {
                        children: /*#__PURE__*/ _jsx("path", {
                            d: "M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"
                        })
                    })
                })
            }),
            /*#__PURE__*/ _jsx("span", {
                className: s.copyText,
                children: copied ? 'Copied!' : copyAllText ? 'Copy link to Tweet' : 'Copy link'
            })
        ]
    });
};
