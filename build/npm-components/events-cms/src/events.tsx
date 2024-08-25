import { Suspense } from 'react';
import { getEvents } from './api/index.js';
import EventsComponent from './events-theme/events-boot.js';


interface Event {
  event: string;
  speaker: string;
  speakerDescription: string;
  start: string;
  end: string;
  title: string;
  duration: string;
  youtube: string;
  year: number;
}

interface User {
  firstName: string;
  lastName: string;
  rocketchatID: string;
}

interface EventsProps {
  cms?: boolean;
  data: Event[];
  user: User[];
}

const EventsContent = async ({ cms, data, user }: EventsProps) => {
  console.log(user);
  let events = data;
  if (cms) {
    const paginatedEvents = await getEvents()
    events = paginatedEvents.docs
  }
//   console.log(events);

  return <EventsComponent  overview={"overviewData"}
  speakers={"speakersData"}
  sessions={events}/>;
};

export const Events = ({ cms, data, user }: EventsProps) => (
  <Suspense>
    {/* @ts-ignore: Async components are valid in the app directory */}
    <EventsContent
      cms={cms}
      data={data}
      user={user}
    />
    {/* <h1>hiiii</h1> */}
  </Suspense>
);
