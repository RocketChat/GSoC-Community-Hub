'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { GithubIcon, MessageCircleIcon } from './icons';
const ProjectsComponent = ({ data })=>{
    const years = Array.from(new Set(data.map((session)=>session.year))).sort((a, b)=>b - a);
    const [selectedYear, setSelectedYear] = useState(years[0]);
    const filteredData = selectedYear ? data.filter((session)=>session.year === selectedYear) : data;
    return /*#__PURE__*/ _jsxs("div", {
        style: {
            paddingLeft: '1rem',
            paddingRight: '1rem',
            marginBottom: "1rem"
        },
        children: [
            /*#__PURE__*/ _jsx("div", {
                style: {
                    marginTop: "2rem",
                    marginBottom: "1rem",
                    font: "2rem",
                    fontWeight: '600',
                    margin: 'auto'
                },
                children: "GSoC Project Ideas"
            }),
            /*#__PURE__*/ _jsx("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '2rem'
                },
                children: /*#__PURE__*/ _jsx(ButtonGroup, {
                    children: years.map((year)=>/*#__PURE__*/ _jsx(Button, {
                            onClick: ()=>setSelectedYear(year),
                            style: {
                                backgroundColor: selectedYear === year ? '#0056b3' : '#0d6efd'
                            },
                            children: year
                        }, year))
                })
            }),
            filteredData.map((project, index)=>/*#__PURE__*/ _jsx("div", {
                    children: /*#__PURE__*/ _jsxs(Card, {
                        style: {
                            margin: 'auto',
                            marginTop: '2rem',
                            maxWidth: '48rem'
                        },
                        children: [
                            /*#__PURE__*/ _jsx(Card.Header, {
                                children: /*#__PURE__*/ _jsxs("div", {
                                    children: [
                                        /*#__PURE__*/ _jsx("h5", {
                                            style: {
                                                fontWeight: '600'
                                            },
                                            children: project.title
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            style: {
                                                fontSize: '0.875rem',
                                                color: '#6B7280',
                                                whiteSpace: 'pre-line'
                                            },
                                            children: project.projectDescription
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsxs(Card.Body, {
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        style: {
                                            marginTop: '0.5rem',
                                            alignItems: 'center'
                                        },
                                        children: /*#__PURE__*/ _jsx("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem'
                                            },
                                            children: /*#__PURE__*/ _jsxs("span", {
                                                style: {
                                                    color: '#6B7280',
                                                    fontSize: '0.875rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ _jsxs("span", {
                                                        style: {
                                                            fontWeight: 'bold'
                                                        },
                                                        children: [
                                                            '👥 Mentor(s)',
                                                            ":"
                                                        ]
                                                    }),
                                                    " ",
                                                    project.mentor
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        style: {
                                            color: '#6B7280',
                                            fontSize: '0.875rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsxs("span", {
                                                style: {
                                                    fontWeight: 'bold'
                                                },
                                                children: [
                                                    '💪 Desired Skills',
                                                    ":"
                                                ]
                                            }),
                                            " ",
                                            project.skills
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        style: {
                                            color: '#6B7280',
                                            fontSize: '0.875rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsxs("span", {
                                                style: {
                                                    fontWeight: 'bold'
                                                },
                                                children: [
                                                    '🎯 Goals/Deliverables',
                                                    ":"
                                                ]
                                            }),
                                            ' ',
                                            project.skills
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        style: {
                                            color: '#6B7280',
                                            fontSize: '0.875rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsxs("span", {
                                                style: {
                                                    fontWeight: 'bold'
                                                },
                                                children: [
                                                    '⏳ Project Duration',
                                                    ":"
                                                ]
                                            }),
                                            ' ',
                                            project.skills
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        style: {
                                            color: '#6B7280',
                                            fontSize: '0.875rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsxs("span", {
                                                style: {
                                                    fontWeight: 'bold'
                                                },
                                                children: [
                                                    '📈 Difficulty',
                                                    ":"
                                                ]
                                            }),
                                            " ",
                                            project.skills
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        style: {
                                            marginTop: '0.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsx(GithubIcon, {
                                                style: {
                                                    height: '1.5rem',
                                                    width: '1.5rem'
                                                }
                                            }),
                                            /*#__PURE__*/ React.createElement(Link, {
                                                href: project.githubLink,
                                                style: {
                                                    fontSize: '0.875rem'
                                                }
                                            }, "GitHub")
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        style: {
                                            marginTop: '0.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsx(MessageCircleIcon, {
                                                style: {
                                                    height: '1.5rem',
                                                    width: '1.5rem',
                                                    color: '#DC2626'
                                                }
                                            }),
                                            /*#__PURE__*/ React.createElement(Link, {
                                                href: project.channelLink,
                                                style: {
                                                    fontSize: '0.875rem'
                                                }
                                            }, "Rocket Chat Channel")
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }))
        ]
    });
};
export default ProjectsComponent;
