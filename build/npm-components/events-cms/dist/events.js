import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { getEvents } from './api/index.js';
import EventsComponent from './events-theme/events-boot.js';
const EventsContent = async ({ cms, data, user })=>{
    console.log(user);
    let events = data;
    if (cms) {
        const paginatedEvents = await getEvents();
        events = paginatedEvents.docs;
    }
    //   console.log(events);
    return /*#__PURE__*/ _jsx(EventsComponent, {
        overview: "overviewData",
        speakers: "speakersData",
        sessions: events
    });
};
export const Events = ({ cms, data, user })=>/*#__PURE__*/ _jsx(Suspense, {
        children: /*#__PURE__*/ _jsx(EventsContent, {
            cms: cms,
            data: data,
            user: user
        })
    });
