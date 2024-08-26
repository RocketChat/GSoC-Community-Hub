"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Clock, Flame, HelpCircle, Star } from "lucide-react";
import { HackerNewsCard, Tabs, TabsContent, TabsList, TabsTrigger } from './components';
export default function HackerNewsComponent({ posts, styleOverrides }) {
    var _styleOverrides, _styleOverrides1, _styleOverrides2, _styleOverrides3;
    const { topStories, newStories, bestStories, askHN, showHN } = posts;
    const defaultStyles = {
        container: "p-8 max-w-[800px] min-h-[800px]",
        tabs: "w-full",
        tabsList: "grid grid-cols-5 mb-5",
        tabsContent: "grid grid-cols-2 gap-6"
    };
    var _styleOverrides_container, _styleOverrides_tabs, _styleOverrides_tabsList, _styleOverrides_tabsContent;
    const styles = {
        container: `${defaultStyles.container} ${(_styleOverrides_container = (_styleOverrides = styleOverrides) == null ? void 0 : _styleOverrides.container) != null ? _styleOverrides_container : ""}`,
        tabs: `${defaultStyles.tabs} ${(_styleOverrides_tabs = (_styleOverrides1 = styleOverrides) == null ? void 0 : _styleOverrides1.tabs) != null ? _styleOverrides_tabs : ""}`,
        tabsList: `${defaultStyles.tabsList} ${(_styleOverrides_tabsList = (_styleOverrides2 = styleOverrides) == null ? void 0 : _styleOverrides2.tabsList) != null ? _styleOverrides_tabsList : ""}`,
        tabsContent: `${defaultStyles.tabsContent} ${(_styleOverrides_tabsContent = (_styleOverrides3 = styleOverrides) == null ? void 0 : _styleOverrides3.tabsContent) != null ? _styleOverrides_tabsContent : ""}`
    };
    return /*#__PURE__*/ _jsx("div", {
        className: styles.container,
        children: /*#__PURE__*/ _jsxs(Tabs, {
            defaultValue: "top",
            className: styles.tabs,
            children: [
                /*#__PURE__*/ _jsxs(TabsList, {
                    className: styles.tabsList,
                    children: [
                        topStories.length > 0 && /*#__PURE__*/ _jsxs(TabsTrigger, {
                            value: "top",
                            children: [
                                /*#__PURE__*/ _jsx(Star, {
                                    className: "mr-2"
                                }),
                                "Top"
                            ]
                        }),
                        newStories.length > 0 && /*#__PURE__*/ _jsxs(TabsTrigger, {
                            value: "new",
                            children: [
                                /*#__PURE__*/ _jsx(Clock, {
                                    className: "mr-2"
                                }),
                                "New"
                            ]
                        }),
                        bestStories.length > 0 && /*#__PURE__*/ _jsxs(TabsTrigger, {
                            value: "best",
                            children: [
                                /*#__PURE__*/ _jsx(Flame, {
                                    className: "mr-2"
                                }),
                                "Best"
                            ]
                        }),
                        askHN.length > 0 && /*#__PURE__*/ _jsxs(TabsTrigger, {
                            value: "ask",
                            children: [
                                /*#__PURE__*/ _jsx(HelpCircle, {
                                    className: "mr-2"
                                }),
                                "Ask"
                            ]
                        }),
                        showHN.length > 0 && /*#__PURE__*/ _jsxs(TabsTrigger, {
                            value: "show",
                            children: [
                                /*#__PURE__*/ _jsx(Flame, {
                                    className: "mr-2"
                                }),
                                "Show"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(TabsContent, {
                    value: "top",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "grid grid-cols-2 gap-6",
                        children: topStories.map((post)=>/*#__PURE__*/ _jsx(HackerNewsCard, {
                                post: post
                            }, post.id))
                    })
                }),
                /*#__PURE__*/ _jsx(TabsContent, {
                    value: "new",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: styles.tabsContent,
                        children: newStories.map((post)=>/*#__PURE__*/ _jsx(HackerNewsCard, {
                                post: post
                            }, post.id))
                    })
                }),
                /*#__PURE__*/ _jsx(TabsContent, {
                    value: "best",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: styles.tabsContent,
                        children: bestStories.map((post)=>/*#__PURE__*/ _jsx(HackerNewsCard, {
                                post: post
                            }, post.id))
                    })
                }),
                /*#__PURE__*/ _jsx(TabsContent, {
                    value: "ask",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: styles.tabsContent,
                        children: askHN.map((post)=>/*#__PURE__*/ _jsx(HackerNewsCard, {
                                post: post
                            }, post.id))
                    })
                }),
                /*#__PURE__*/ _jsx(TabsContent, {
                    value: "show",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: styles.tabsContent,
                        children: showHN.map((post)=>/*#__PURE__*/ _jsx(HackerNewsCard, {
                                post: post
                            }, post.id))
                    })
                })
            ]
        })
    });
}
