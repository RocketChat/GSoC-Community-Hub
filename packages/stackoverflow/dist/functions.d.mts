type questionsType = {
    newPosts: questionType[];
    hotPosts: questionType[];
    topPosts: questionType[];
    unansweredPosts: questionType[];
};
type questionType = {
    question_id: string;
    view_count: number;
    answer_count: number;
    score: number;
    is_answered: boolean;
    creation_date: number;
    link: string;
    title: string;
    tags: string[];
};
declare const getStackOverflowQuestions: (tag: string) => Promise<{
    topPosts: questionType[];
    newPosts: questionType[];
    hotPosts: questionType[];
    unansweredPosts: questionType[];
}>;
declare function openInNewTab(url: string): void;
declare function timeAgo(utcTime: number): string;

export { getStackOverflowQuestions, openInNewTab, questionType, questionsType, timeAgo };
