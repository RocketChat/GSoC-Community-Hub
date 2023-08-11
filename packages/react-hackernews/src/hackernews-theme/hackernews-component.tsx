"use client"
import React from 'react'
import { Clock, Flame, HelpCircle, Star } from "lucide-react";
import { HackerNewsCard, Tabs, TabsContent, TabsList, TabsTrigger } from './components';
import { postsType } from '../api';

export default function HackerNewsComponent({ posts, styleOverrides }: { posts: postsType, styleOverrides?: { main?: string, container?: string, tabs?: string, tabsList?: string, tabsContent?: string } }) {
    const { topStories, newStories, bestStories, askHN, showHN } = posts

    const defaultStyles = {
        container: "p-8 max-w-[800px] min-h-[800px]",
        tabs: "w-full",
        tabsList: "grid grid-cols-5 mb-5",
        tabsContent: "grid grid-cols-2 gap-6"
    };

    const styles = {
        container: `${defaultStyles.container} ${styleOverrides?.container ?? ""}`,
        tabs: `${defaultStyles.tabs} ${styleOverrides?.tabs ?? ""}`,
        tabsList: `${defaultStyles.tabsList} ${styleOverrides?.tabsList ?? ""}`,
        tabsContent: `${defaultStyles.tabsContent} ${styleOverrides?.tabsContent ?? ""}`,
    };

    return (

        <div className={styles.container}>
            <Tabs defaultValue="top" className={styles.tabs}>
                <TabsList className={styles.tabsList}>
                    {topStories.length > 0 && <TabsTrigger value="top">
                        <Star className="mr-2" />
                        Top
                    </TabsTrigger>}
                    {newStories.length > 0 && <TabsTrigger value="new">
                        <Clock className="mr-2" />
                        New
                    </TabsTrigger>}
                    {bestStories.length > 0 &&<TabsTrigger value="best">
                        <Flame className="mr-2" />
                        Best
                    </TabsTrigger>}
                    {askHN.length > 0 &&<TabsTrigger value="ask">
                        <HelpCircle className="mr-2" />
                        Ask
                    </TabsTrigger>}
                    {showHN.length > 0 &&<TabsTrigger value="show">
                        <Flame className="mr-2" />
                        Show
                    </TabsTrigger>}
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
    )
}