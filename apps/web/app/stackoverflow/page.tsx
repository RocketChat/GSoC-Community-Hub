import StackOverflowComponent, { getStackOverflowQuestions } from "@rc4-stackoverflow/StackOverflowComponent";

export default async function Home() {
    const questions = await getStackOverflowQuestions("blender");
 
    const questions1 = await getStackOverflowQuestions("react");
    return (
        <>
            <StackOverflowComponent questions={questions} />
            <StackOverflowComponent questions={questions1} />
        </>
    );
}