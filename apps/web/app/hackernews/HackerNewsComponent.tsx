import React from 'react'
import { Flame, HelpCircle, Star, Clock } from "lucide-react";
import { HackerNewsCard } from "./HackerNewsCard";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

function HackerNewsComponent({ posts }) {
    const { topStories, newStories, bestStories, askHN, showHN } = posts

    return (
        <main className="w-auto">
            <div className="container p-8 max-w-[200px]">
                <Tabs defaultValue="top" className="w-full">
                    <TabsList className="grid w-full grid-cols-5 mb-5">
                        <TabsTrigger value="top">
                            <Star className="mr-2" />
                            Top
                        </TabsTrigger>
                        <TabsTrigger value="new">
                            <Clock className="mr-2" />
                            New
                        </TabsTrigger>
                        <TabsTrigger value="best">
                            <Flame className="mr-2" />
                            Best
                        </TabsTrigger>
                        <TabsTrigger value="ask">
                            <HelpCircle className="mr-2" />
                            Ask
                        </TabsTrigger>
                        <TabsTrigger value="show">
                            <Flame className="mr-2" />
                            Show
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="top">
                        <div className="grid grid-cols-2 gap-6">
                            {topStories.map((post) => (
                                <HackerNewsCard key={post.id} post={post} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="new">
                        <div className="grid grid-cols-2 gap-6">
                            {newStories.map((post) => (
                                <HackerNewsCard key={post.id} post={post} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="best">
                        <div className="grid grid-cols-2 gap-6">
                            {bestStories.map((post) => (
                                <HackerNewsCard key={post.id} post={post} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="ask">
                        <div className="grid grid-cols-2 gap-6">
                            {askHN.map((post) => (
                                <HackerNewsCard key={post.id} post={post} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="show">
                        <div className="grid grid-cols-2 gap-6">
                            {showHN.map((post) => (
                                <HackerNewsCard key={post.id} post={post} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    )
}

export const getHackerNewsPosts = async (query: string) => {
    const topStories = await fetchHackerNewsPosts(query, "points");
    const newStories = await fetchHackerNewsPosts(query, "created_at");
    const bestStories = await fetchHackerNewsPosts(query, "points");
    const askHN = await fetchHackerNewsPosts(query, "search_by_date", "ask_hn");
    const showHN = await fetchHackerNewsPosts(query, "created_at", "show_hn");

    return { topStories, newStories, bestStories, askHN, showHN }
}

const fetchHackerNewsPosts = async (query: string, sort: string, storyType?: string) => {
    let res;
    const tags = storyType ? `story,${storyType}` : 'story';
    await fetch(`https://hn.algolia.com/api/v1/${sort === "created_at" ? "search_by_date" : "search"}?query=${query}&tags=${tags}&page=1&hitsPerPage=8`)
        .then((response) => response.json())
        .then((data) => {
            res = data.hits;
        })
        .catch((err) => {
            console.log(err);
        });
    return res;
}

export default HackerNewsComponent