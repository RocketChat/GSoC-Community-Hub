import StackOverflowComponent from "@palanikannan1437/rc4community-stackoverflow/StackOverflowComponent";

import { getStackOverflowQuestions } from "@palanikannan1437/rc4community-stackoverflow/functions";


export default async function Home() {
    const questions = await getStackOverflowQuestions("django");
    const questions1 = await getStackOverflowQuestions("react");

    // console.log(questions)
    return (
        <>
           <StackOverflowComponent  questions ={questions}/>
           <StackOverflowComponent  questions ={questions1}/>
        </>
    );
}