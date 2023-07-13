import * as react_jsx_runtime from 'react/jsx-runtime';

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

declare function HackerNewsComponent({ posts }: {
    posts: postsType;
}): react_jsx_runtime.JSX.Element;

export { HackerNewsComponent as default };
