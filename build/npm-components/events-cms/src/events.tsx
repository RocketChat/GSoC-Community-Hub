import { Suspense } from 'react';
import { getEvents } from './api/index.js';
import EventsComponent from './events-theme/events-boot.js';


interface Session {
  id: string | number;
  Event: string;
  Start: string;
  End: string;
  Title: string;
  Mentor: string;
  Description: string;
  Speaker: string;
  Duration: number;
  Youtube: string | null;
}

interface Speaker {
  name: string;
  description: string;
  photo_url: string;
  short_biography: string;
  long_biography: string;
  position: string;
}


interface EventsProps {
  cms?: boolean;
  data: Session[];
  speakers: Speaker[];
}

const EventsContent = async ({  data, speakers }: EventsProps) => {
  // console.log(user);
  let events = data;
  // if (cms) {
  //   const paginatedEvents = await getEvents()
  //   events = paginatedEvents.docs
  // }
  // console.log("-----------",events);

  return <EventsComponent  overview={"overviewData"}
  speakers={speakers}
  sessions={events}
  />;
  // return;
};

export const Events = ({ data,speakers }: EventsProps) => (
  <Suspense>
    {/* @ts-ignore: Async components are valid in the app directory */}
    <EventsContent
      speakers={speakers}
      data={data}
    />
    {/* <h1>hiiii</h1> */}
  </Suspense>
);
