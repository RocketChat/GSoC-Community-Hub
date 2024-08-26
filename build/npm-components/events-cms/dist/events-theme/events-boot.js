'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Image } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import 'bootstrap/dist/css/bootstrap.min.css';
const EventsComponent = ({ overview, speakers, sessions })=>{
    const [activeFilter, setActiveFilter] = useState('speakers');
    const [expandedSpeaker, setExpandedSpeaker] = useState(null);
    const toggleSpeakerBio = (speakerName)=>{
        setExpandedSpeaker(expandedSpeaker === speakerName ? null : speakerName);
    };
    const renderContent = ()=>{
        switch(activeFilter){
            case 'overview':
                return /*#__PURE__*/ _jsxs("div", {
                    style: {
                        justifyContent: "center",
                        alignContent: "center"
                    },
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            style: {
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ _jsx("h2", {
                                    children: "About the Event"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    children: /*#__PURE__*/ _jsx("strong", {
                                        children: "TLDR; Rocket.Chat's GSoC 2024: Pioneering the Future with GenAI Innovation"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            children: "Ready to experience the next wave of chat evolution? Join us for Rocket.Chat's Google Summer of Code Project Demo Day 2024, where our brilliant contributors will unveil groundbreaking GenAI projects and other cutting-edge developments they've crafted over the past few months. 🚀"
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            children: "Discover how Rocket.Chat is pushing the boundaries of what's possible with Generative AI, creating smarter, more intuitive chat experiences that redefine productivity and collaboration. You'll also see how we're empowering our community with open-source tools that fuel innovation and creativity. 💡"
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            style: {
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ _jsx("p", {
                                    children: "Event highlights include:"
                                }),
                                /*#__PURE__*/ _jsxs("ul", {
                                    children: [
                                        /*#__PURE__*/ _jsx("li", {
                                            children: "Inspiring insights from Rocket.Chat's visionary leaders"
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: "Live demos of revolutionary GenAI features and integrations"
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: "Engage with our vibrant community members & Rocketeers"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            children: "Don't miss your chance to connect with our amazing community and witness firsthand how Rocket.Chat is transforming the future of chat. Save the date and prepare to be inspired!"
                        })
                    ]
                });
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
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '1rem',
                                            alignItems: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsx(Image, {
                                                src: speaker.photo_url,
                                                roundedCircle: true,
                                                style: {
                                                    height: '4rem',
                                                    width: '4rem'
                                                }
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        style: {
                                                            display: 'flex',
                                                            gap: '1rem',
                                                            alignItems: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ _jsx("h5", {
                                                                style: {
                                                                    fontWeight: '600',
                                                                    margin: 0
                                                                },
                                                                children: speaker.name
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    gap: '0.5rem'
                                                                },
                                                                children: /*#__PURE__*/ _jsx(SocialIcon, {
                                                                    iconType: "passbook",
                                                                    speaker: speaker,
                                                                    style: {
                                                                        height: '1.5rem',
                                                                        width: '1.5rem',
                                                                        color: '#3EAFEA'
                                                                    }
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        style: {
                                                            fontWeight: '400',
                                                            margin: 0,
                                                            fontSize: "1rem",
                                                            color: "gray"
                                                        },
                                                        children: speaker.position.replace(/''/g, "’")
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsxs(Card.Body, {
                                    children: [
                                        /*#__PURE__*/ _jsx("p", {
                                            children: speaker.short_biography.replace(/''/g, "’")
                                        }),
                                        expandedSpeaker === speaker.name ? /*#__PURE__*/ _jsxs("div", {
                                            children: [
                                                /*#__PURE__*/ _jsx("p", {
                                                    children: speaker.long_biography.replace(/''/g, "'")
                                                }),
                                                /*#__PURE__*/ _jsx(Button, {
                                                    onClick: ()=>toggleSpeakerBio(speaker.name),
                                                    variant: "light",
                                                    children: "Show Less"
                                                })
                                            ]
                                        }) : /*#__PURE__*/ _jsx(Button, {
                                            onClick: ()=>toggleSpeakerBio(speaker.name),
                                            variant: "light",
                                            children: "Learn more"
                                        })
                                    ]
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
                            onClick: ()=>setActiveFilter('overview'),
                            style: {
                                backgroundColor: activeFilter === 'overview' ? '#0056b3' : '#0d6efd'
                            },
                            children: "Overview"
                        }),
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
function SocialIcon2({ iconType, link, ...props }) {
    const socialIcons = {
        linkedin: /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsx("path", {
                    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                }),
                /*#__PURE__*/ _jsx("rect", {
                    x: "2",
                    y: "9",
                    width: "4",
                    height: "12"
                }),
                /*#__PURE__*/ _jsx("circle", {
                    cx: "4",
                    cy: "4",
                    r: "2"
                })
            ]
        }),
        twitter: /*#__PURE__*/ _jsx("path", {
            d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
        }),
        github: /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsx("path", {
                    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                /*#__PURE__*/ _jsx("path", {
                    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
                    stroke: "white",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            ]
        }),
        facebook: /*#__PURE__*/ _jsx("path", {
            d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
        }),
        email: /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsx("path", {
                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                }),
                /*#__PURE__*/ _jsx("polyline", {
                    points: "22,6 12,13 2,6"
                })
            ]
        }),
        passbook: /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsx("path", {
                    d: "M19 3h-11c-1.654 0-3 1.346-3 3v1h-1c-.553 0-1 .448-1 1s.447 1 1 1h1v2h-1c-.553 0-1 .448-1 1s.447 1 1 1h1v2h-1c-.553 0-1 .448-1 1s.447 1 1 1h1v1c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3v-12c0-1.654-1.346-3-3-3zm-12 3c0-.551.449-1 1-1v2h-1v-1zm0 3h1v2h-1v-2zm0 4h1v2h-1v-2zm0 5v-1h1v2c-.551 0-1-.449-1-1zm13 0c0 .551-.449 1-1 1h-10v-14h10c.551 0 1 .449 1 1v12z"
                }),
                /*#__PURE__*/ _jsx("circle", {
                    cx: "14",
                    cy: "10.5",
                    r: "2"
                }),
                /*#__PURE__*/ _jsx("path", {
                    d: "M14 13.356c-1.562 0-2.5.715-2.5 1.429 0 .357.938.715 2.5.715 1.466 0 2.5-.357 2.5-.715 0-.714-.98-1.429-2.5-1.429z"
                })
            ]
        })
    };
    if (iconType !== 'passbook' && !link) return null;
    return /*#__PURE__*/ _jsx("a", {
        href: link || "",
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/ _jsx("svg", {
            ...props,
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: socialIcons[iconType]
        })
    });
}
function SocialIcon({ iconType, speaker, ...props }) {
    const socialIcons = {
        linkedin: /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsx("path", {
                    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                }),
                /*#__PURE__*/ _jsx("rect", {
                    x: "2",
                    y: "9",
                    width: "4",
                    height: "12"
                }),
                /*#__PURE__*/ _jsx("circle", {
                    cx: "4",
                    cy: "4",
                    r: "2"
                })
            ]
        }),
        twitter: /*#__PURE__*/ _jsx("path", {
            d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
        }),
        github: /*#__PURE__*/ _jsx("path", {
            d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        }),
        email: /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsx("path", {
                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                }),
                /*#__PURE__*/ _jsx("polyline", {
                    points: "22,6 12,13 2,6"
                })
            ]
        }),
        passbook: /*#__PURE__*/ _jsx(_Fragment, {
            children: /*#__PURE__*/ _jsx("svg", {
                stroke: "currentColor",
                fill: "currentColor",
                "stroke-width": "0",
                version: "1.2",
                baseProfile: "tiny",
                viewBox: "0 0 24 24",
                height: "20",
                width: "20",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ _jsxs("g", {
                    children: [
                        /*#__PURE__*/ _jsx("path", {
                            d: "M19 3h-11c-1.654 0-3 1.346-3 3v1h-1c-.553 0-1 .448-1 1s.447 1 1 1h1v2h-1c-.553 0-1 .448-1 1s.447 1 1 1h1v2h-1c-.553 0-1 .448-1 1s.447 1 1 1h1v1c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3v-12c0-1.654-1.346-3-3-3zm-12 3c0-.551.449-1 1-1v2h-1v-1zm0 3h1v2h-1v-2zm0 4h1v2h-1v-2zm0 5v-1h1v2c-.551 0-1-.449-1-1zm13 0c0 .551-.449 1-1 1h-10v-14h10c.551 0 1 .449 1 1v12z"
                        }),
                        /*#__PURE__*/ _jsx("circle", {
                            cx: "14",
                            cy: "10.5",
                            r: "2"
                        }),
                        /*#__PURE__*/ _jsx("path", {
                            d: "M14 13.356c-1.562 0-2.5.715-2.5 1.429 0 .357.938.715 2.5.715 1.466 0 2.5-.357 2.5-.715 0-.714-.98-1.429-2.5-1.429z"
                        })
                    ]
                })
            })
        })
    };
    return /*#__PURE__*/ _jsx(OverlayTrigger, {
        placement: "top",
        delay: {
            show: 250,
            hide: 1200
        },
        overlay: /*#__PURE__*/ _jsx(Tooltip, {
            id: `tooltip-${iconType}`,
            children: /*#__PURE__*/ _jsxs("div", {
                style: {
                    display: 'flex',
                    gap: '0.5rem'
                },
                children: [
                    speaker.linkedin && /*#__PURE__*/ _jsx(SocialIcon2, {
                        iconType: "linkedin",
                        link: speaker.linkedin,
                        style: {
                            height: '1.5rem',
                            width: '1.5rem',
                            color: '#0077B5'
                        }
                    }),
                    speaker.twitter && /*#__PURE__*/ _jsx(SocialIcon2, {
                        iconType: "twitter",
                        link: speaker.twitter,
                        style: {
                            height: '1.5rem',
                            width: '1.5rem',
                            color: '#1DA1F2'
                        }
                    }),
                    speaker.github && /*#__PURE__*/ _jsx(SocialIcon2, {
                        iconType: "github",
                        link: speaker.github,
                        style: {
                            height: '1.5rem',
                            width: '1.5rem',
                            color: '#333'
                        }
                    })
                ]
            })
        }),
        children: /*#__PURE__*/ _jsx("svg", {
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
            children: socialIcons["passbook"]
        })
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
