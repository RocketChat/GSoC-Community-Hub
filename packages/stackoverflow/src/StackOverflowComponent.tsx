"use client"

import { Flame, HelpCircle } from "lucide-react";
import { StackOverflowCard } from "@/src/StackOverflowCard";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/src/components/ui/tabs"
import { LineChart } from "lucide-react";
import { BadgeIcon } from "@radix-ui/react-icons";
import { questionsType } from '@/src/functions';

function StackOverflowComponent({ questions }: { questions: questionsType }) {
    const { newPosts, hotPosts, topPosts, unansweredPosts } = questions

    return (
        <div className="flex min-h-screen items-center py-2">
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
                                {unansweredPosts.map((question) => (
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
        </div>
    )
}

export default StackOverflowComponent