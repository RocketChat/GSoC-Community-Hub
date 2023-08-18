import type { Tweet, MediaDetails, HashtagEntity, SymbolEntity, Indices, UserMentionEntity, UrlEntity, MediaEntity, MediaAnimatedGif, MediaVideo } from './api/index.js';
export type TweetCoreProps = {
    id: string;
    onError?(error: any): any;
};
export declare const getMediaUrl: (media: MediaDetails, size: 'small' | 'medium' | 'larget') => string;
export declare const getMp4Videos: (media: MediaAnimatedGif | MediaVideo) => {
    bitrate?: number | undefined;
    content_type: "video/mp4" | "application/x-mpegURL";
    url: string;
}[];
export declare const getMp4Video: (media: MediaAnimatedGif | MediaVideo) => {
    bitrate?: number | undefined;
    content_type: "video/mp4" | "application/x-mpegURL";
    url: string;
};
export declare const formatNumber: (n: number) => string;
type TextEntity = {
    indices: Indices;
    type: 'text';
};
type Entity = {
    text: string;
} & (TextEntity | (HashtagEntity & {
    type: 'hashtag';
    href: string;
}) | (UserMentionEntity & {
    type: 'mention';
    href: string;
}) | (UrlEntity & {
    type: 'url';
    href: string;
}) | (MediaEntity & {
    type: 'media';
    href: string;
}) | (SymbolEntity & {
    type: 'symbol';
    href: string;
}));
export type EnrichedTweet = Omit<Tweet, 'entities'> & {
    url: string;
    user: {
        url: string;
        follow_url: string;
    };
    like_url: string;
    reply_url: string;
    in_reply_to_url?: string;
    entities: Entity[];
};
/**
 * Enriches a tweet with additional data used to more easily use the tweet in a UI.
 */
export declare const enrichTweet: (tweet: Tweet) => EnrichedTweet;
export {};
