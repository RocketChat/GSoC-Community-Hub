"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flame, HelpCircle } from "lucide-react";
import { StackOverflowCard, Tabs, TabsContent, TabsList, TabsTrigger } from './components';
import { LineChart } from "lucide-react";
import { BadgeIcon } from "@radix-ui/react-icons";
function StackOverflowComponent({ questions }) {
    const { newPosts, hotPosts, topPosts, unansweredPosts } = questions;
    return /*#__PURE__*/ _jsx("div", {
        className: "flex min-h-screen items-center py-2",
        children: /*#__PURE__*/ _jsx("main", {
            className: "w-auto",
            children: /*#__PURE__*/ _jsx("div", {
                className: "container p-8 max-w-[800px]",
                children: /*#__PURE__*/ _jsxs(Tabs, {
                    defaultValue: "top",
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ _jsxs(TabsList, {
                            className: "grid w-full grid-cols-4 mb-5",
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
                                    value: "unanswered",
                                    children: [
                                        /*#__PURE__*/ _jsx(HelpCircle, {
                                            className: "mr-2"
                                        }),
                                        "Unanswered"
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
                                /*#__PURE__*/ _jsxs(TabsTrigger, {
                                    value: "new",
                                    children: [
                                        /*#__PURE__*/ _jsx(BadgeIcon, {
                                            className: "mr-2"
                                        }),
                                        "New"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx(TabsContent, {
                            value: "top",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "grid grid-cols-2 gap-6",
                                children: topPosts.map((question)=>/*#__PURE__*/ _jsx(StackOverflowCard, {
                                        question: question
                                    }, question.question_id))
                            })
                        }),
                        /*#__PURE__*/ _jsx(TabsContent, {
                            value: "unanswered",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "grid grid-cols-2 gap-6",
                                children: unansweredPosts.map((question)=>/*#__PURE__*/ _jsx(StackOverflowCard, {
                                        question: question
                                    }, question.question_id))
                            })
                        }),
                        /*#__PURE__*/ _jsx(TabsContent, {
                            value: "hot",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "grid grid-cols-2 gap-6",
                                children: hotPosts.map((question)=>/*#__PURE__*/ _jsx(StackOverflowCard, {
                                        question: question
                                    }, question.question_id))
                            })
                        }),
                        /*#__PURE__*/ _jsx(TabsContent, {
                            value: "new",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "grid grid-cols-2 gap-6",
                                children: newPosts.map((question)=>/*#__PURE__*/ _jsx(StackOverflowCard, {
                                        question: question
                                    }, question.question_id))
                            })
                        })
                    ]
                })
            })
        })
    });
}
export default StackOverflowComponent;
