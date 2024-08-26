import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import EventsComponent from './events-theme/events-boot.js';
const EventsContent = async ({ data, speakers })=>{
    // console.log(user);
    let events = data;
    // if (cms) {
    //   const paginatedEvents = await getEvents()
    //   events = paginatedEvents.docs
    // }
    // console.log("-----------",events);
    return /*#__PURE__*/ _jsx(EventsComponent, {
        overview: "overviewData",
        speakers: speakers,
        sessions: events
    });
// return;
};
export const Events = ({ data, speakers })=>/*#__PURE__*/ _jsx(Suspense, {
        children: /*#__PURE__*/ _jsx(EventsContent, {
            speakers: speakers,
            data: data
        })
    });
