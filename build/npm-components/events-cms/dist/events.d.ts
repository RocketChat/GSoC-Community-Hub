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
export declare const Events: ({ data, speakers }: EventsProps) => import("react/jsx-runtime").JSX.Element;
export {};
