import { getStackOverflowQuestions } from "./functions";

import StackOverflowComponent from "./StackOverflowComponent";

export default async function DemoStackOverFlowComponent() {
    const questions = await getStackOverflowQuestions("django");
    
    return (
        <StackOverflowComponent questions={questions} />
    );
}