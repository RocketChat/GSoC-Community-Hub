export type postsType = {
    topStories: postType[],
    newStories: postType[],
    bestStories: postType[],
    askHN: postType[],
    showHN: postType[],
}

export type postType = {
    id: string,
    url: string,
    title: string,
    num_comments: number,
    points: number,
    author: string,
    created_at_i: number
}

export const getHackerNewsPosts = async (tag: string) =>{
    const topStories = await fetchHackerNewsPosts(tag, "points");
    const newStories = await fetchHackerNewsPosts(tag, "created_at");
    const bestStories = await fetchHackerNewsPosts(tag, "points");
    const askHN = await fetchHackerNewsPosts(tag, "search_by_date", "ask_hn");
    const showHN = await fetchHackerNewsPosts(tag, "created_at", "show_hn");

    return { topStories, newStories, bestStories, askHN, showHN }
}

const fetchHackerNewsPosts = async (query: string, sort: string, storyType?: string) => {
    let res;
    const tags = storyType ? `story,${storyType}` : 'story';
    const response = await fetch(`https://hn.algolia.com/api/v1/${sort === "created_at" ? "search_by_date" : "search"}?query=${query}&tags=${tags}&page=1&hitsPerPage=8`)
    const results: { hits: postType[] } = await response.json()
    return results.hits;
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