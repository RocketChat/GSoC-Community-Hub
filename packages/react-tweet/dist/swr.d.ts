import { type ReactNode } from 'react';
import { type TwitterComponents } from './twitter-theme/components.js';
import { type TweetCoreProps } from './utils.js';
export type TweetProps = Omit<TweetCoreProps, 'id'> & {
    fallback?: ReactNode;
    components?: TwitterComponents;
    fetchOptions?: RequestInit;
} & ({
    id: string;
    apiUrl?: string;
} | {
    id?: string;
    apiUrl: string | undefined;
});
export declare const Tweet: ({ id, apiUrl, fallback, components, fetchOptions, onError, }: TweetProps) => string | number | boolean | Iterable<ReactNode> | import("react").JSX.Element | null;
