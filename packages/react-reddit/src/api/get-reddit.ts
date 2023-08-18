import { RedditPost, RedditPosts } from "./types";

export const getRedditPosts = async (subreddit: string) => {
    const topPosts = await getRedditPost("top", subreddit);
    const newPosts = await getRedditPost("new", subreddit);
    const hotPosts = await getRedditPost("hot", subreddit);

    return { topPosts, newPosts, hotPosts }
}

const getRedditPost = async (type: "top" | "new" | "hot", subreddit: string): Promise<RedditPost[]> => {
    const data = await fetch(`https://www.reddit.com/r/${subreddit}/${type}.json?limit=10`)
    const res = await data.json();
    const fetchedPosts: RedditPost[] = res.data.children.map((post: {data: any}) => ({
        id: post.data.id,
        title: post.data.title,
        url: post.data.url,
        comments: post.data.num_comments,
        upvotes: post.data.upvotes,
        time_ago: post.data.created_utc
    }));

    return fetchedPosts;
}

export function openInNewTab(url: string) {
    (window as Window).open(url, '_blank')?.focus();
}

export function timeAgo(utcTime: number): string {
    const now = new Date();
    const diff = now.getTime() - utcTime * 1000; // convert to milliseconds
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days}d ago`;
    } else if (hours > 0) {
        return `${hours}h ago`;
    } else if (minutes > 0) {
        return `${minutes}m ago`;
    } else {
        return `${seconds}s ago`;
    }
}
