import { questionType } from "./question"

export type questionsType = {
    newPosts: questionType[],
    hotPosts: questionType[],
    topPosts: questionType[],
    unansweredPosts: questionType[]
}