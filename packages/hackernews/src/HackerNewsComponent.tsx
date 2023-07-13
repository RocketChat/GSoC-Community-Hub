"use client"
import React from 'react'
import { Flame, HelpCircle, Star, Clock } from "lucide-react";
import { HackerNewsCard } from "@/src/HackerNewsCard";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/src/components/ui/tabs"
import { postsType } from '@/src/functions';

export default function HackerNewsComponent({ posts }: { posts: postsType }) {
    const { topStories, newStories, bestStories, askHN, showHN } = posts

    return (
        <div className="flex min-h-screen items-center py-2">
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
        </div >

    )
}