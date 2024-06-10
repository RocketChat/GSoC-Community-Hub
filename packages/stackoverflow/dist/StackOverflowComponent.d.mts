import * as react_jsx_runtime from 'react/jsx-runtime';

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

declare function StackOverflowComponent({ questions }: {
    questions: questionsType;
}): react_jsx_runtime.JSX.Element;

export { StackOverflowComponent as default };
