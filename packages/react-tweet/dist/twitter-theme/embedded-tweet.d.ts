/// <reference types="react" />
import type { Tweet } from '../api/index.js';
import type { TwitterComponents } from './types.js';
type Props = {
    tweet: Tweet;
    components?: Omit<TwitterComponents, 'TweetNotFound'>;
};
export declare const EmbeddedTweet: ({ tweet: t, components }: Props) => import("react").JSX.Element;
export {};
