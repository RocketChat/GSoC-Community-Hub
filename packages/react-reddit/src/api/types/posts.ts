import { RedditPost } from "./post"

export type RedditPosts = {
    newPosts: RedditPost[],
    hotPosts: RedditPost[],
    topPosts: RedditPost[],
}