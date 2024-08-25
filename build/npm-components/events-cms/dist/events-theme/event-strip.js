import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import { GoLocation } from 'react-icons/go';
function EventStrip({ event, ticket, containerRef, customLink, handleJoin, eid, showMainstage }) {
    var _ticket_attributes, _ticket;
    const [timezone, setTimezone] = useState('');
    const [startDate, setStartDate] = useState(event.attributes['starts-at']);
    const [endDate, setEndDate] = useState(event.attributes['ends-at']);
    useEffect(()=>{
        // Fetch the timezone from the user's browser
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setTimezone(timeZone);
        const start = new Date(event.attributes['starts-at']);
        const end = new Date(event.attributes['ends-at']);
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: timeZone
        };
        setStartDate(`${new Date(start).toLocaleTimeString('en-US', options)}`);
        setEndDate(`${new Date(end).toLocaleTimeString('en-US', options)}`);
    }, [
        event.attributes['starts-at'],
        event.attributes['ends-at'],
        timezone
    ]);
    var _ticket_attributes_price;
    return /*#__PURE__*/ _jsxs(Container, {
        className: styles.event_strip_container,
        ref: containerRef,
        fluid: true,
        children: [
            /*#__PURE__*/ _jsxs(Row, {
                className: styles.event_strip_name,
                children: [
                    /*#__PURE__*/ _jsx(Col, {
                        style: {
                            overflow: 'auto'
                        },
                        children: event.attributes.name
                    }),
                    /*#__PURE__*/ _jsx(Col, {
                        xs: 2,
                        md: 1,
                        xl: 1,
                        sm: 1.5,
                        xxl: 1,
                        className: "event-join-button",
                        children: showMainstage ? /*#__PURE__*/ _jsx(Button, {
                            size: "sm",
                            onClick: handleJoin,
                            children: "Join"
                        }) : /*#__PURE__*/ _jsx(Button, {
                            size: "sm",
                            href: customLink || `/conferences/greenroom/${eid}`,
                            target: "_blank",
                            children: "Join (BBB)"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("hr", {}),
            /*#__PURE__*/ _jsxs(Row, {
                className: styles.event_strip_bottom,
                children: [
                    /*#__PURE__*/ _jsxs(Col, {
                        sm: 4,
                        md: 5,
                        className: "event-datetime",
                        children: [
                            /*#__PURE__*/ _jsxs(Row, {
                                children: [
                                    "Time and Date (",
                                    timezone,
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ _jsxs(Row, {
                                children: [
                                    startDate,
                                    " - ",
                                    endDate
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(Col, {
                        className: "event-location",
                        children: [
                            /*#__PURE__*/ _jsxs(Row, {
                                className: styles.event_strip_location_row,
                                children: [
                                    /*#__PURE__*/ _jsx(Col, {
                                        xs: 1,
                                        md: 1,
                                        xl: 1,
                                        sm: 1,
                                        xxl: 1,
                                        children: /*#__PURE__*/ _jsx(GoLocation, {})
                                    }),
                                    /*#__PURE__*/ _jsx(Col, {
                                        children: "Location"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs(Row, {
                                children: [
                                    /*#__PURE__*/ _jsx(Col, {
                                        xs: 1,
                                        md: 1,
                                        xl: 1,
                                        sm: 1,
                                        xxl: 1
                                    }),
                                    /*#__PURE__*/ _jsx(Col, {
                                        children: event.attributes['location-name'] || 'Online'
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(Col, {
                        className: "event-ticket-details",
                        children: [
                            /*#__PURE__*/ _jsx(Row, {
                                children: /*#__PURE__*/ _jsxs(Col, {
                                    children: [
                                        ticket ? ticket.attributes.name : 'Community',
                                        ' ',
                                        /*#__PURE__*/ _jsx(Badge, {
                                            as: 'span',
                                            pill: true,
                                            bg: "light",
                                            text: "secondary",
                                            children: (_ticket_attributes_price = (_ticket = ticket) == null ? void 0 : (_ticket_attributes = _ticket.attributes) == null ? void 0 : _ticket_attributes.price) != null ? _ticket_attributes_price : 'Free'
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "ticket-name"
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "ticket-price",
                                children: ticket ? ticket.attributes.price : 'Free'
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
export default EventStrip;
