import { TimelineObjectType } from 'core';

declare const Button: () => JSX.Element;

declare const Card: ({ title, cta, href, }: {
    title: string;
    cta: string;
    href: string;
}) => JSX.Element;

declare const Timeline: ({ type, data, num, }: {
    type: "vertical" | "horizontal";
    data: TimelineObjectType[];
    num: number;
}) => JSX.Element | null;

export { Button, Card, Timeline };
