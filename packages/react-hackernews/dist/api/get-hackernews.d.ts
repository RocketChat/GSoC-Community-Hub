import { postType } from "./types/post.js";
export declare const getHackerNewsPosts: (tag: string) => Promise<{
    topStories: postType[];
    newStories: postType[];
    bestStories: postType[];
    askHN: postType[];
    showHN: postType[];
}>;
export declare function openInNewTab(url: string): void;
export declare function timeAgo(utcTime: number): string;
