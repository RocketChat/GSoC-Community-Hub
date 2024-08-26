export const getRedditPosts = async (subreddit)=>{
    const topPosts = await getRedditPost("top", subreddit);
    const newPosts = await getRedditPost("new", subreddit);
    const hotPosts = await getRedditPost("hot", subreddit);
    return {
        topPosts,
        newPosts,
        hotPosts
    };
};
const getRedditPost = async (type, subreddit)=>{
    const data = await fetch(`https://www.reddit.com/r/${subreddit}/${type}.json?limit=10`);
    const res = await data.json();
    const fetchedPosts = res.data.children.map((post)=>({
            id: post.data.id,
            title: post.data.title,
            url: post.data.url,
            comments: post.data.num_comments,
            upvotes: post.data.ups,
            time_ago: post.data.created_utc
        }));
    return fetchedPosts;
};
export function openInNewTab(url) {
    var _window_open;
    (_window_open = window.open(url, '_blank')) == null ? void 0 : _window_open.focus();
}
export function timeAgo(utcTime) {
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
