import * as React from 'react';
export interface IRedditPost {
    id: string;
    title: string;
    url: string;
}

type Props = {
    post: IRedditPost;
};

const RedditPost: React.FC<Props> = ({ post }) => {
    return (
        <div className="bg-white p-4 rounded shadow-md w-full border border-gray-300">
            <h1 className="text-xl font-bold mb-2">{post.title}</h1>
            <p>{post.url}</p>
        </div>
    );
};

export default RedditPost;