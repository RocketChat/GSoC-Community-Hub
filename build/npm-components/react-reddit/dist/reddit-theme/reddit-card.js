"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MessageCircle, ArrowBigUp } from "lucide-react";
import { ClipboardCheck } from "lucide-react";
import { useState } from "react";
import { ClipboardCopy } from "lucide-react";
import Link from "next/link";
import { openInNewTab, timeAgo } from "../api";
import { Button, Card, CardContent, CardHeader, CardTitle } from "./components";
export function RedditCard({ post }) {
    var _post;
    const [copied, setCopied] = useState(false);
    return /*#__PURE__*/ _jsxs(Card, {
        onClick: ()=>openInNewTab(post.url),
        className: "bg-white border border-gray-200 shadow-sm relative max-h-32 max-w-sm p-2",
        children: [
            /*#__PURE__*/ _jsxs(CardHeader, {
                className: "flex flex-row justify-between p-1 h-10",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "max-w-[250px] whitespace-wrap",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: post.url,
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: /*#__PURE__*/ _jsx(CardTitle, {
                                className: "hover:underline text-gray-800 text-sm",
                                children: (_post = post) == null ? void 0 : _post.title
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        children: /*#__PURE__*/ _jsxs(Button, {
                            variant: "secondary",
                            size: "sm",
                            onClick: ()=>{
                                navigator.clipboard.writeText(post.url);
                                setCopied(true);
                                setTimeout(()=>setCopied(false), 1000);
                            },
                            children: [
                                !copied ? /*#__PURE__*/ _jsx(ClipboardCopy, {
                                    className: "mr-2 h-4 w-4"
                                }) : /*#__PURE__*/ _jsx(ClipboardCheck, {
                                    className: "mr-2 h-4 w-4"
                                }),
                                !copied ? "Share" : "Copied"
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(CardContent, {
                className: "p-1 h-20 flex flex-col justify-end",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "flex space-x-4 text-sm text-muted-foreground",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ _jsx(MessageCircle, {
                                    className: "mr-1 h-4 w-4 fill-orange-600 text-orange-600"
                                }),
                                post.comments
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ _jsx(ArrowBigUp, {
                                    className: "mr-1 h-4 w-6"
                                }),
                                post.upvotes
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            children: [
                                "Posted ",
                                timeAgo(post.time_ago)
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
