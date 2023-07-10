// import StackOverflowComponent, { getStackOverflowQuestions } from "@rc4-stackoverflow/StackOverflowComponent";

import { getStackOverflowQuestions } from "@palanikannan1437/rc4community-stackoverflow/functions";

import StackOverflowComponent from "./StackOverflowComponent";
import Dummycomponent from "./dummycomponent";
// import  StackOverflowComponent  from "@palanikannan1437/rc4community-stackoverflow/StackOverflowComponent";

export default async function HelperDummy() {
    const questions = await getStackOverflowQuestions("django");
    console.log(questions)
    return (
        <>
           <Dummycomponent  questions ={questions}/>
        </>
    );
}