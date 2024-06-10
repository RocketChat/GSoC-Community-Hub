/// <reference types="react" />
import { type EnrichedTweet } from '../utils.js';
import type { TwitterComponents } from './types.js';
type Props = {
    tweet: EnrichedTweet;
    components?: TwitterComponents;
};
export declare const TweetMedia: ({ tweet, components }: Props) => import("react").JSX.Element;
export {};
