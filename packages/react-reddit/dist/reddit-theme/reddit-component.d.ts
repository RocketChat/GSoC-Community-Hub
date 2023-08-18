import React from 'react';
import { RedditPosts } from '../api';
declare function RedditComponent({ posts }: {
    posts: RedditPosts;
}): React.JSX.Element;
export default RedditComponent;
