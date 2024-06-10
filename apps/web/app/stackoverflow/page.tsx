// import StackOverflowComponent from "@palanikannan1437/rc4community-stackoverflow/StackOverflowComponent";

// import { getStackOverflowQuestions } from "@palanikannan1437/rc4community-stackoverflow/functions";

import { StackOverflow } from "@palanikannan1437/rc4-stackoverflow";
import "@palanikannan1437/rc4-stackoverflow/styles.css"

// import styles from './styles.module.css'
export default async function Home() {
    return (
        <>
            <StackOverflow id="blender" apiKey="g3mAQmsDYenxbigx)cDf6g(("/>
        </>
    );
}

// export default async function Home() {
//     const questions = await getStackOverflowQuestions("django");
//     const questions1 = await getStackOverflowQuestions("react");

//     console.log(questions)
//     return (
//         <>
//             <StackOverflowComponent  questions ={questions}/>
//            <StackOverflowComponent  questions ={questions1}/>
//         </>
//     );
// }