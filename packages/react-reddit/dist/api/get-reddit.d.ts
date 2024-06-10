import { RedditPost } from "./types";
export declare const getRedditPosts: (subreddit: string) => Promise<{
    topPosts: RedditPost[];
    newPosts: RedditPost[];
    hotPosts: RedditPost[];
}>;
export declare function openInNewTab(url: string): void;
export declare function timeAgo(utcTime: number): string;
