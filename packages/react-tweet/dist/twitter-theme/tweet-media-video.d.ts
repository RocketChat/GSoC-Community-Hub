/// <reference types="react" />
import type { MediaAnimatedGif, MediaVideo } from '../api/index.js';
import { type EnrichedTweet } from '../utils.js';
type Props = {
    tweet: EnrichedTweet;
    media: MediaAnimatedGif | MediaVideo;
};
export declare const TweetMediaVideo: ({ tweet, media }: Props) => import("react").JSX.Element;
export {};
