'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const EventsComponent = ({ overview, speakers, sessions })=>{
    const [activeFilter, setActiveFilter] = useState('sessions');
    const renderContent = ()=>{
        switch(activeFilter){
            case 'speakers':
                return /*#__PURE__*/ _jsx("div", {
                    children: speakers.map((speaker, index)=>/*#__PURE__*/ _jsxs(Card, {
                            style: {
                                margin: 'auto',
                                marginTop: '2rem',
                                maxWidth: '38rem'
                            },
                            children: [
                                /*#__PURE__*/ _jsx(Card.Header, {
                                    children: /*#__PURE__*/ _jsx("h5", {
                                        style: {
                                            fontWeight: '600'
                                        },
                                        children: speaker.name
                                    })
                                }),
                                /*#__PURE__*/ _jsx(Card.Body, {
                                    children: /*#__PURE__*/ _jsx("p", {
                                        children: speaker.description
                                    })
                                })
                            ]
                        }, index))
                });
            case 'sessions':
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
        }
    };
    return /*#__PURE__*/ _jsxs("div", {
        style: {
            paddingLeft: '1rem',
            paddingRight: '1rem'
        },
        children: [
            /*#__PURE__*/ _jsx("div", {
                style: {
                    background: `url(${"https://github.com/RocketChat/RC4Conferences/blob/main/assets/alumni_summit_2024.png?raw=true"})`,
                    backgroundRepeat: 'round',
                    borderRadius: '15px',
                    margin: 'auto',
                    maxWidth: '900px',
                    display: 'flex',
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ _jsx("div", {
                    style: {
                        backdropFilter: 'blur(10px)',
                        borderRadius: 'inherit'
                    },
                    children: /*#__PURE__*/ _jsx(Image, {
                        src: "https://github.com/RocketChat/RC4Conferences/blob/main/assets/alumni_summit_2024.png?raw=true",
                        style: {
                            scale: '70%'
                        },
                        fluid: true
                    })
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '2rem',
                    marginTop: "1rem"
                },
                children: /*#__PURE__*/ _jsxs(ButtonGroup, {
                    children: [
                        /*#__PURE__*/ _jsx(Button, {
                            onClick: ()=>setActiveFilter('sessions'),
                            style: {
                                backgroundColor: activeFilter === 'sessions' ? '#0056b3' : '#0d6efd'
                            },
                            children: "Sessions"
                        }),
                        /*#__PURE__*/ _jsx(Button, {
                            onClick: ()=>setActiveFilter('speakers'),
                            style: {
                                backgroundColor: activeFilter === 'speakers' ? '#0056b3' : '#0d6efd'
                            },
                            children: "Speakers"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                style: {
                    marginBottom: '2rem'
                },
                children: renderContent()
            })
        ]
    });
};
// ClockIcon and YoutubeIcon components remain unchanged
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
export default EventsComponent;
