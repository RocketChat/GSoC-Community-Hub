'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const SessionComponent = ({ sessions })=>{
    return /*#__PURE__*/ _jsx("div", {
        children: sessions.map((session, index)=>/*#__PURE__*/ _jsxs(Card, {
                style: {
                    margin: 'auto',
                    marginTop: '2rem',
                    maxWidth: '38rem'
                },
                children: [
                    /*#__PURE__*/ _jsx(Card.Header, {
                        children: /*#__PURE__*/ _jsxs("div", {
                            children: [
                                /*#__PURE__*/ _jsx("h5", {
                                    style: {
                                        fontWeight: '600'
                                    },
                                    children: session.Speaker
                                }),
                                session.Mentor.length !== 0 ? /*#__PURE__*/ _jsxs("p", {
                                    style: {
                                        fontSize: '0.875rem',
                                        color: '#6B7280'
                                    },
                                    children: [
                                        "Mentor: ",
                                        session.Mentor
                                    ]
                                }) : /*#__PURE__*/ _jsx("p", {
                                    style: {
                                        fontSize: '0.875rem',
                                        color: '#6B7280'
                                    }
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsxs(Card.Body, {
                        children: [
                            /*#__PURE__*/ _jsx(Accordion, {
                                style: {},
                                children: /*#__PURE__*/ _jsxs(Accordion.Item, {
                                    eventKey: "0",
                                    style: {},
                                    children: [
                                        /*#__PURE__*/ _jsx(Accordion.Header, {
                                            children: session.Title
                                        }),
                                        /*#__PURE__*/ _jsx(Accordion.Body, {
                                            children: session.Description
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                style: {
                                    marginTop: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                },
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsx(ClockIcon, {
                                                style: {
                                                    height: '1.25rem',
                                                    width: '1.25rem',
                                                    color: '#6B7280'
                                                }
                                            }),
                                            /*#__PURE__*/ _jsxs("span", {
                                                style: {
                                                    color: '#6B7280'
                                                },
                                                children: [
                                                    new Date(session.Start).toLocaleTimeString([], {
                                                        hour: 'numeric',
                                                        minute: '2-digit',
                                                        hour12: true
                                                    }),
                                                    " -",
                                                    new Date(session.End).toLocaleTimeString([], {
                                                        hour: 'numeric',
                                                        minute: '2-digit',
                                                        hour12: true
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsx(ClockIcon, {
                                                style: {
                                                    height: '1.25rem',
                                                    width: '1.25rem',
                                                    color: '#6B7280'
                                                }
                                            }),
                                            /*#__PURE__*/ _jsxs("span", {
                                                style: {
                                                    color: '#6B7280'
                                                },
                                                children: [
                                                    session.Duration,
                                                    " min"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            session.Youtube !== null ? /*#__PURE__*/ _jsxs("div", {
                                style: {
                                    marginTop: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ _jsx(YoutubeIcon, {
                                        style: {
                                            height: '1.5rem',
                                            width: '1.5rem',
                                            color: '#DC2626'
                                        }
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        style: {
                                            color: '#2563EB'
                                        },
                                        children: session.Youtube
                                    })
                                ]
                            }) : /*#__PURE__*/ _jsxs("div", {
                                style: {
                                    marginTop: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ _jsx(YoutubeIcon, {
                                        style: {
                                            height: '1.5rem',
                                            width: '1.5rem',
                                            color: '#DC2626'
                                        }
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        style: {
                                            color: '#2563EB'
                                        },
                                        children: "Coming..."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }, index))
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
