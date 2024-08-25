'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const EventsComponent = ({ data })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "mx-auto max-w-5xl p-4",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "mb-4 flex justify-between border-b pb-2",
                children: [
                    /*#__PURE__*/ _jsx("button", {
                        className: "font-semibold text-blue-600",
                        children: "Overview"
                    }),
                    /*#__PURE__*/ _jsx("button", {
                        className: "font-semibold text-blue-600",
                        children: "Sessions"
                    }),
                    /*#__PURE__*/ _jsx("button", {
                        className: "font-semibold text-blue-600",
                        children: "Speakers"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "relative grid grid-cols-1 gap-8",
                children: data.docs.map((session, index)=>/*#__PURE__*/ _jsxs("div", {
                        className: "relative overflow-hidden rounded-xl bg-gray-500 shadow-md",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "flex items-center space-x-4 p-4",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ _jsx("h3", {
                                            className: "font-semibold",
                                            children: session.speaker
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "text-sm text-gray-500",
                                            children: session.speakerDescription
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "border-t p-4",
                                children: [
                                    /*#__PURE__*/ _jsx("h4", {
                                        className: "font-semibold",
                                        children: session.title
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "mt-2 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ _jsx(ClockIcon, {
                                                        className: "h-5 w-5 text-gray-500"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("span", {
                                                        className: "text-gray-500",
                                                        children: [
                                                            session.start,
                                                            " - ",
                                                            session.end
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ _jsx(ClockIcon, {
                                                        className: "h-5 w-5 text-gray-500"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("span", {
                                                        className: "text-gray-500",
                                                        children: [
                                                            session.duration,
                                                            " min"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "mt-2 flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ _jsx(YoutubeIcon, {
                                                className: "h-6 w-6 text-red-600"
                                            }),
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "text-blue-600",
                                                children: session.youtube
                                            })
                                        ]
                                    })
                                ]
                            }),
                            index !== 0 && /*#__PURE__*/ _jsx("div", {
                                className: "absolute left-0 top-0 h-full w-1 translate-x-[-50%] transform bg-gray-200"
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "absolute left-0 top-0 h-5 w-5 -translate-y-[50%] translate-x-[-50%] transform rounded-full border border-gray-200 bg-white"
                            })
                        ]
                    }, index))
            })
        ]
    });
};
export default EventsComponent;
function ClockIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ _jsx("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }),
            /*#__PURE__*/ _jsx("polyline", {
                points: "12 6 12 12 16 14"
            })
        ]
    });
}
function YoutubeIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "m10 15 5-3-5-3z"
            })
        ]
    });
}
