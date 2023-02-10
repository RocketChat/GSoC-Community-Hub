declare const Button: () => JSX.Element;

declare const Card: ({ title, cta, href, }: {
    title: string;
    cta: string;
    href: string;
}) => JSX.Element;

declare const Timeline: ({ type, data, num, }: {
    type: "vertical" | "horizontal";
    data: any;
    num: number;
}) => JSX.Element | undefined;

export { Button, Card, Timeline };
