type postsType = {
    topStories: postType[];
    newStories: postType[];
    bestStories: postType[];
    askHN: postType[];
    showHN: postType[];
};
type postType = {
    id: string;
    url: string;
    title: string;
    num_comments: number;
    points: number;
    author: string;
    created_at_i: number;
};
declare const getHackerNewsPosts: (tag: string) => Promise<{
    topStories: postType[];
    newStories: postType[];
    bestStories: postType[];
    askHN: postType[];
    showHN: postType[];
}>;
declare function openInNewTab(url: string): void;
declare function timeAgo(utcTime: number): string;

export { getHackerNewsPosts, openInNewTab, postType, postsType, timeAgo };
