import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Col, Container, Image, Row, Stack } from 'react-bootstrap';
import styles from '../styles/index.module.css';
import { EventTicket } from './EventRegisterSection';
import { BsCalendar2Event } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
export const SmEventHeader = ({ event, error, customLink })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.event_small_banner,
        children: [
            /*#__PURE__*/ _jsx(Image, {
                src: event.data.attributes['original-image-url'],
                fluid: true
            }),
            /*#__PURE__*/ _jsx(EventTicket, {
                tktDetail: event.included[0],
                event: event,
                error: error,
                customLink: customLink
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: styles.event_banner_title,
                children: [
                    /*#__PURE__*/ _jsx(Container, {
                        children: /*#__PURE__*/ _jsx(Row, {
                            children: /*#__PURE__*/ _jsxs(Col, {
                                children: [
                                    /*#__PURE__*/ _jsx("h4", {
                                        children: event.data.attributes.name
                                    }),
                                    /*#__PURE__*/ _jsxs("p", {
                                        children: [
                                            "by",
                                            ' ',
                                            /*#__PURE__*/ _jsx("span", {
                                                style: {
                                                    color: '#d6162f'
                                                },
                                                children: event.data.attributes['owner-name'] || 'Dnouv'
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("hr", {}),
                    /*#__PURE__*/ _jsxs(Stack, {
                        gap: isSmallScreen ? 3 : 1,
                        direction: isSmallScreen ? 'vertical' : 'horizontal',
                        children: [
                            /*#__PURE__*/ _jsx(EventDate, {
                                eventData: event.data
                            }),
                            /*#__PURE__*/ _jsx(EventLocation, {
                                eventData: event.data
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
export const MdEventHeader = ({ event, error, customLink })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.event_big_banner,
        children: [
            /*#__PURE__*/ _jsx("div", {
                style: {
                    background: `url(${event.data.attributes['original-image-url']})`,
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
                        src: event.data.attributes['original-image-url'],
                        style: {
                            scale: '70%'
                        },
                        fluid: true
                    })
                })
            }),
            /*#__PURE__*/ _jsx(EventTicket, {
                tktDetail: event.included[0],
                event: event,
                error: error,
                customLink: customLink
            })
        ]
    });
};
export const EventDate = ({ eventData })=>{
    let start = eventData.attributes['starts-at'];
    let end = eventData.attributes['ends-at'];
    start = `${new Date(start).toDateString()} ${new Date(start).toLocaleTimeString()}`;
    end = `${new Date(end).toDateString()} ${new Date(end).toLocaleTimeString()}`;
    return /*#__PURE__*/ _jsx(Container, {
        children: /*#__PURE__*/ _jsxs(Row, {
            className: styles.date_icon,
            children: [
                /*#__PURE__*/ _jsx(Col, {
                    xs: 1,
                    children: /*#__PURE__*/ _jsx(BsCalendar2Event, {})
                }),
                /*#__PURE__*/ _jsx(Col, {
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: styles.event_date,
                        children: [
                            /*#__PURE__*/ _jsxs("h6", {
                                children: [
                                    "Date and Time (",
                                    Intl.DateTimeFormat().resolvedOptions().timeZone,
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ _jsx("span", {
                                children: start + ' - '
                            }),
                            /*#__PURE__*/ _jsx("span", {
                                children: end
                            })
                        ]
                    })
                })
            ]
        })
    });
};
export const MdEventDate = ({ eventData })=>{
    let start = eventData.attributes['starts-at'];
    let end = eventData.attributes['ends-at'];
    start = `${new Date(start).toDateString()} ${new Date(start).toLocaleTimeString()}`;
    end = `${new Date(end).toDateString()} ${new Date(end).toLocaleTimeString()}`;
    return /*#__PURE__*/ _jsxs(Row, {
        className: styles.date_icon,
        children: [
            /*#__PURE__*/ _jsx(Col, {
                xs: 1,
                children: /*#__PURE__*/ _jsx(BsCalendar2Event, {})
            }),
            /*#__PURE__*/ _jsx(Col, {
                children: /*#__PURE__*/ _jsxs("div", {
                    className: styles.event_date,
                    children: [
                        /*#__PURE__*/ _jsxs("h6", {
                            children: [
                                "Date and Time (",
                                Intl.DateTimeFormat().resolvedOptions().timeZone,
                                ")"
                            ]
                        }),
                        /*#__PURE__*/ _jsx("span", {
                            children: start + ' - '
                        }),
                        /*#__PURE__*/ _jsx("span", {
                            children: end
                        })
                    ]
                })
            })
        ]
    });
};
export const EventSingleDate = ({ eventData })=>{
    let start = eventData.attributes['starts-at'];
    start = new Date(start);
    const month = start.toLocaleString('default', {
        month: 'short'
    });
    const date = start.getDate();
    return /*#__PURE__*/ _jsxs(Stack, {
        className: "mx-auto",
        children: [
            /*#__PURE__*/ _jsx("span", {
                children: month
            }),
            /*#__PURE__*/ _jsx("span", {
                children: date
            })
        ]
    });
};
const EventLocation = ({ eventData })=>{
    const location = eventData.attributes['location-name'];
    return /*#__PURE__*/ _jsx(Container, {
        children: /*#__PURE__*/ _jsxs(Row, {
            children: [
                /*#__PURE__*/ _jsx(Col, {
                    xs: 1,
                    children: /*#__PURE__*/ _jsx(GoLocation, {})
                }),
                /*#__PURE__*/ _jsx(Col, {
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: styles.event_date,
                        children: [
                            /*#__PURE__*/ _jsx("h6", {
                                children: "Location"
                            }),
                            location ? location : 'Online'
                        ]
                    })
                })
            ]
        })
    });
};
const MdEventLocation = ({ eventData })=>{
    const location = eventData.attributes['location-name'];
    return /*#__PURE__*/ _jsxs(Row, {
        className: "mb-5",
        children: [
            /*#__PURE__*/ _jsx(Col, {
                xs: 1,
                children: /*#__PURE__*/ _jsx(GoLocation, {})
            }),
            /*#__PURE__*/ _jsx(Col, {
                children: /*#__PURE__*/ _jsx("div", {
                    className: styles.event_date,
                    children: location ? /*#__PURE__*/ _jsx("h6", {
                        children: "location"
                    }) : 'Online'
                })
            })
        ]
    });
};
