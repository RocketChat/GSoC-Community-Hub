import { postType } from "./post.js";

export type postsType = {
    topStories: postType[],
    newStories: postType[],
    bestStories: postType[],
    askHN: postType[],
    showHN: postType[],
}
