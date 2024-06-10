import { questionType } from "./types";

export const getStackOverflowQuestions = async (tag: string, apiKey: string) => {
    const topPosts = await fetchStackOverflowQuestions("votes", tag, apiKey);
    const newPosts = await fetchStackOverflowQuestions("creation", tag, apiKey);
    const hotPosts = await fetchStackOverflowQuestions("activity", tag, apiKey);
    const unansweredPosts = await fetchStackOverflowQuestions("creation", tag, apiKey, true);

    return { topPosts, newPosts, hotPosts, unansweredPosts }
}

const fetchStackOverflowQuestions = async (type: "activity" | "creation" | "votes", tag: string, apiKey: string, unanswered?: true) => {
    const response = await fetch(`https://api.stackexchange.com/2.3/questions?order=desc&sort=${type}&tagged=${tag}&site=stackoverflow&key=${apiKey}&pagesize=8&unsanswered=${unanswered}`)
    const results: { items: questionType[] } = await response.json()
    return results.items;
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
