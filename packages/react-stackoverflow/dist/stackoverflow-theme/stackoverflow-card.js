"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { MessageCircle, Star, CheckCircle, Clock } from "lucide-react";
import { openInNewTab, timeAgo } from '../api/index.js';
import { Button, Card, CardContent, CardHeader, CardTitle } from './components.js';
import Link from "next/link";
import { Eye } from "lucide-react";
export function StackOverflowCard({ question }) {
    var _question;
    const [copied, setCopied] = React.useState(false);
    return /*#__PURE__*/ _jsxs(Card, {
        onClick: ()=>openInNewTab(question.link),
        className: "bg-white border border-gray-200 shadow-sm relative max-h-32 max-w-sm p-2",
        children: [
            /*#__PURE__*/ _jsxs(CardHeader, {
                className: "flex flex-row justify-between p-1 h-10",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "max-w-[250px] whitespace-wrap",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: question.link,
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: /*#__PURE__*/ _jsx(CardTitle, {
                                className: "hover:underline text-gray-800 text-sm",
                                children: (_question = question) == null ? void 0 : _question.title
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        children: /*#__PURE__*/ _jsx(Button, {
                            variant: "secondary",
                            size: "sm",
                            onClick: (e)=>{
                                e.stopPropagation();
                                navigator.clipboard.writeText(question.link);
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
            /*#__PURE__*/ _jsxs(CardContent, {
                className: "p-1 h-20 flex flex-col justify-end",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "flex flex-wrap",
                        children: question.tags.map((tag, index)=>/*#__PURE__*/ _jsx("span", {
                                className: "bg-gray-200 text-gray-800 px-1 py-0.5 mr-1 mb-1 rounded text-xs",
                                children: tag
                            }, index))
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "flex space-x-2 text-xs text-gray-600 flex-wrap",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ _jsx(MessageCircle, {
                                        className: "mr-1 h-3 w-3 fill-orange-600 text-orange-600"
                                    }),
                                    question.answer_count,
                                    " answers"
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ _jsx(Star, {
                                        className: "mr-1 h-3 w-3 text-orange-600"
                                    }),
                                    question.score,
                                    " votes"
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ _jsx(Eye, {
                                        className: "mr-1 h-3 w-3 text-gray-600"
                                    }),
                                    question.view_count,
                                    " views"
                                ]
                            }),
                            question.is_answered && /*#__PURE__*/ _jsxs("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ _jsx(CheckCircle, {
                                        className: "mr-1 h-3 w-3 text-green-600"
                                    }),
                                    "Answer accepted"
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ _jsx(Clock, {
                                        className: "mr-1 h-3 w-3 text-green-600"
                                    }),
                                    "Posted ",
                                    timeAgo(question.creation_date)
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
