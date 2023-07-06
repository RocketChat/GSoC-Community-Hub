import React from 'react'
import { Flame, HelpCircle } from "lucide-react";
import { StackOverflowCard } from "./StackOverflowCard";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { LineChart } from "lucide-react";
import { BadgeIcon  } from "@radix-ui/react-icons";

function StackOverflowComponent({ questions }) {
    const { newPosts, hotPosts, topPosts, unsansweredPosts } = questions

    return (
        <main className="w-auto">
            <div className="container p-8 max-w-[200px]">
                <Tabs defaultValue="top" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-5">
                        <TabsTrigger value="top">
                            <LineChart className="mr-2" />
                            Top
                        </TabsTrigger>
                        <TabsTrigger value="unanswered">
                            <HelpCircle className="mr-2" />
                            Unanswered
                        </TabsTrigger>
                        <TabsTrigger value="hot">
                            <Flame className="mr-2" />
                            Hot
                        </TabsTrigger>
                        <TabsTrigger value="new">
                            <BadgeIcon className="mr-2" />
                            New
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="top">
                        <div className="grid grid-cols-2 gap-6">
                            {topPosts.map((question) => (
                                <StackOverflowCard key={question.question_id} question={question} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="unanswered">
                        <div className="grid grid-cols-2 gap-6">
                            {unsansweredPosts.map((question) => (
                                <StackOverflowCard key={question.question_id} question={question} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="hot">
                        <div className="grid grid-cols-2 gap-6">
                            {hotPosts.map((question) => (
                                <StackOverflowCard key={question.question_id} question={question} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="new">
                        <div className="grid grid-cols-2 gap-6">
                            {newPosts.map((question) => (
                                <StackOverflowCard key={question.question_id} question={question} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    )
}

export const getStackOverflowQuestions = async (tag: string) => {
    const topPosts = await fetchStackOverflowQuestions("votes", tag);
    const newPosts = await fetchStackOverflowQuestions("creation", tag);
    const hotPosts = await fetchStackOverflowQuestions("activity", tag);
    const unsansweredPosts = await fetchStackOverflowQuestions("creation", tag, true);

    return { topPosts, newPosts, hotPosts, unsansweredPosts }
}

const fetchStackOverflowQuestions = async (type: "activity" | "creation" | "votes", tag: string, unanswered?: true) => {
    let res;
    const apiKey = "g3mAQmsDYenxbigx)cDf6g((";
    await fetch(`https://api.stackexchange.com/2.3/questions?order=desc&sort=${type}&tagged=${tag}&site=stackoverflow&key=${apiKey}&pagesize=8&unsanswered=${unanswered}`)
        .then((response) => response.json())
        .then((data) => {
            res = data.items;
        })
        .catch((err) => {
            console.log(err);
        });
    return res;
}

export default StackOverflowComponent