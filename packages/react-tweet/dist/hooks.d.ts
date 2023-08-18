import { type Tweet } from './api/index.js';
/**
 * SWR hook for fetching a tweet in the browser.
 */
export declare const useTweet: (id?: string, apiUrl?: string, fetchOptions?: RequestInit) => {
    isLoading: boolean;
    data: Tweet | null | undefined;
    error: any;
};
export declare const useMounted: () => boolean;
