import { TimelineObjectType } from '@palanikannan1437/rc4-core';

declare const Button: () => JSX.Element;

declare const Card: ({ title, cta, href, }: {
    title: string;
    cta: string;
    href: string;
}) => JSX.Element;

declare const Timeline: ({ type, data, }: {
    type: "vertical" | "horizontal";
    data: TimelineObjectType[];
}) => JSX.Element | null;

export { Button, Card, Timeline };
