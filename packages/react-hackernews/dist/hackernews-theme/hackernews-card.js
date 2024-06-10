"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import Link from "next/link";
// import Image from 'next/image'
import { Clock, MessageCircle, ThumbsUp, User } from 'lucide-react';
import { timeAgo } from '../api/index.js';
import { Button, Card, CardContent, CardHeader, CardTitle } from './components.js';
export function HackerNewsCard({ post }) {
    var _post;
    const [copied, setCopied] = useState(false);
    return /*#__PURE__*/ _jsxs(Card, {
        className: "bg-white border border-red-200 shadow-sm relative max-h-32 max-w-sm p-2",
        children: [
            /*#__PURE__*/ _jsxs(CardHeader, {
                className: "flex flex-row justify-between p-1 h-10",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "max-w-[200px] whitespace-wrap",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: ((_post = post) == null ? void 0 : _post.url) ? post.url : 'https://news.ycombinator.com/',
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: /*#__PURE__*/ _jsx(CardTitle, {
                                className: "hover:underline text-gray-800 text-sm",
                                children: post.title
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        children: /*#__PURE__*/ _jsx(Button, {
                            variant: "secondary",
                            size: "sm",
                            onClick: (e)=>{
                                e.stopPropagation();
                                navigator.clipboard.writeText(post.url);
                                setCopied(true);
                                setTimeout(()=>setCopied(false), 1000);
                            },
                            children: /*#__PURE__*/ _jsx("span", {
                                className: "text-sm",
                                children: !copied ? "Share" : "Copied"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(CardContent, {
                className: "p-1 h-20 flex flex-col justify-end",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "flex space-x-2 text-xs text-gray-600 flex-wrap",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ _jsx(MessageCircle, {
                                    className: "mr-1 h-3 w-3 fill-orange-600 text-orange-600"
                                }),
                                post.num_comments,
                                " comments"
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ _jsx(ThumbsUp, {
                                    className: "mr-1 h-3 w-3 fill-orange-600 text-orange-600"
                                }),
                                post.points,
                                " points"
                            ]
                        }),
                        /*#__PURE__*/ _jsx(Link, {
                            href: `https://news.ycombinator.com/user?id=${post.author}`,
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ _jsx(User, {
                                        className: "mr-1 h-3 w-3 text-orange-600"
                                    }),
                                    "by ",
                                    post.author
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ _jsx(Clock, {
                                    className: "mr-1 h-3 w-3 text-green-600"
                                }),
                                "Posted ",
                                timeAgo(post.created_at_i)
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
