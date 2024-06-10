import React from 'react'
import { Flame } from "lucide-react";
import { RedditCard } from "./RedditCard";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { LineChart } from "lucide-react";
import { BadgeIcon } from "@radix-ui/react-icons";

function RedditComponent({ posts }) {
    const { newPosts, hotPosts, topPosts } = posts
    return (<div className="container mx-auto p-8">
        <Tabs defaultValue="top" className="w-[800px]">
            <TabsList className="grid w-full grid-cols-3 mb-5">
                <TabsTrigger value="top">
                    <LineChart className="mr-2" />
                    Top
                </TabsTrigger>
                <TabsTrigger value="hot">
                    <Flame className="mr-2" />
                    Hot
                </TabsTrigger>
                <TabsTrigger value="new">
                    <BadgeIcon className="mr-2" />
                    New</TabsTrigger>
            </TabsList>
            <TabsContent value="top">
                <div className="grid grid-cols-2 gap-6">
                    {topPosts.map((post) => (
                        <RedditCard key={post.id} post={post} />
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="hot">
                <div className="grid grid-cols-2 gap-6">
                    {hotPosts.map((post) => (
                        <RedditCard key={post.id} post={post} />
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="new">
                <div className="grid grid-cols-2 gap-6">
                    {newPosts.map((post) => (
                        <RedditCard key={post.id} post={post} />
                    ))}
                </div>
            </TabsContent>
        </Tabs>
    </div>
    )
}

export default RedditComponent