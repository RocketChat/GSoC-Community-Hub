export type questionsType = {
    newPosts: questionType[],
    hotPosts: questionType[],
    topPosts: questionType[],
    unansweredPosts: questionType[]
}

export type questionType = {
    question_id: string,
    view_count: number,
    answer_count: number,
    score: number,
    is_answered: boolean,
    creation_date: number,
    link: string,
    title: string,
    tags: string[],
}

export const getStackOverflowQuestions = async (tag: string) => {
    const topPosts = await fetchStackOverflowQuestions("votes", tag);
    const newPosts = await fetchStackOverflowQuestions("creation", tag);
    const hotPosts = await fetchStackOverflowQuestions("activity", tag);
    const unansweredPosts = await fetchStackOverflowQuestions("creation", tag, true);

    return { topPosts, newPosts, hotPosts, unansweredPosts }
}

const fetchStackOverflowQuestions = async (type: "activity" | "creation" | "votes", tag: string, unanswered?: true) => {
    const apiKey = "g3mAQmsDYenxbigx)cDf6g((";
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