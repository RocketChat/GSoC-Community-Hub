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

export default function HackerNewsComponent({ posts, styleOverrides }: { posts: postsType, styleOverrides?: { main?: string, container?: string, tabs?: string, tabsList?: string, tabsContent?: string } }) {

    const { topStories, newStories, bestStories, askHN, showHN } = posts

    const defaultStyles = {
        main: "w-auto",
        container: "container p-8 max-w-[200px]",
        tabs: "w-full",
        tabsList: "grid w-full grid-cols-5 mb-5",
        tabsContent: "grid grid-cols-2 gap-6"
    };

    const styles = {
        main: `${defaultStyles.main} ${styleOverrides?.main ?? ""}`,
        container: `${defaultStyles.container} ${styleOverrides?.container ?? ""}`,
        tabs: `${defaultStyles.tabs} ${styleOverrides?.tabs ?? ""}`,
        tabsList: `${defaultStyles.tabsList} ${styleOverrides?.tabsList ?? ""}`,
        tabsContent: `${defaultStyles.tabsContent} ${styleOverrides?.tabsContent ?? ""}`,
    };

    return (
        <div className="flex min-h-screen items-center justify-center py-2">
            <main className={styles.main}>
                <div className={styles.container}>
                    <Tabs defaultValue="top" className={styles.tabs}>
                        <TabsList className={styles.tabsList}>
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
                            <div className={styles.tabsContent}>
                                {newStories.map((post) => (
                                    <HackerNewsCard key={post.id} post={post} />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="best">
                            <div className={styles.tabsContent}>
                                {bestStories.map((post) => (
                                    <HackerNewsCard key={post.id} post={post} />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="ask">
                            <div className={styles.tabsContent}>
                                {askHN.map((post) => (
                                    <HackerNewsCard key={post.id} post={post} />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="show">
                            <div className={styles.tabsContent}>
                                {showHN.map((post) => (
                                    <HackerNewsCard key={post.id} post={post} />
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    )
}