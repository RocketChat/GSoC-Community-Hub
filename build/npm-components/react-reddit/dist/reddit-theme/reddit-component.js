import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Flame } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components';
import { LineChart } from "lucide-react";
// import { BadgeIcon } from "@radix-ui/react-icons";
import { RedditCard } from './reddit-card';
function RedditComponent({ posts }) {
    const { newPosts, hotPosts, topPosts } = posts;
    return /*#__PURE__*/ _jsx("div", {
        className: "container mx-auto p-8",
        children: /*#__PURE__*/ _jsxs(Tabs, {
            defaultValue: "top",
            className: "w-[700px]",
            children: [
                /*#__PURE__*/ _jsxs(TabsList, {
                    className: "grid w-full grid-cols-3 mb-5",
                    children: [
                        /*#__PURE__*/ _jsxs(TabsTrigger, {
                            value: "top",
                            children: [
                                /*#__PURE__*/ _jsx(LineChart, {
                                    className: "mr-2"
                                }),
                                "Top"
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(TabsTrigger, {
                            value: "hot",
                            children: [
                                /*#__PURE__*/ _jsx(Flame, {
                                    className: "mr-2"
                                }),
                                "Hot"
                            ]
                        }),
                        /*#__PURE__*/ _jsx(TabsTrigger, {
                            value: "new",
                            children: "New"
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(TabsContent, {
                    value: "top",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "grid grid-cols-2 gap-6",
                        children: topPosts.map((post)=>/*#__PURE__*/ _jsx(RedditCard, {
                                post: post
                            }, post.id))
                    })
                }),
                /*#__PURE__*/ _jsx(TabsContent, {
                    value: "hot",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "grid grid-cols-2 gap-6",
                        children: hotPosts.map((post)=>/*#__PURE__*/ _jsx(RedditCard, {
                                post: post
                            }, post.id))
                    })
                }),
                /*#__PURE__*/ _jsx(TabsContent, {
                    value: "new",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "grid grid-cols-2 gap-6",
                        children: newPosts.map((post)=>/*#__PURE__*/ _jsx(RedditCard, {
                                post: post
                            }, post.id))
                    })
                })
            ]
        })
    });
}
export default RedditComponent;
