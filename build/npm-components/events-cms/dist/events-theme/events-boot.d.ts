import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    linkedin?: string;
    twitter?: string;
    github?: string;
}
interface EventsComponentProps {
    overview: string;
    speakers: Speaker[];
    sessions: Session[];
}
declare const EventsComponent: React.FC<EventsComponentProps>;
export default EventsComponent;
