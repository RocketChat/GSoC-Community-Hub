import { questionType } from "./types";
export declare const getStackOverflowQuestions: (tag: string) => Promise<{
    topPosts: questionType[];
    newPosts: questionType[];
    hotPosts: questionType[];
    unansweredPosts: questionType[];
}>;
export declare function openInNewTab(url: string): void;
export declare function timeAgo(utcTime: number): string;
