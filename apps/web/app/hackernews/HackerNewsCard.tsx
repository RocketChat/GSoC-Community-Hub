"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from 'next/image'
import hackerNewsIcon from "./hacker-news.png"
import { Button } from '@/components/ui/button'
import { MessageCircle, ThumbsUp, User } from 'lucide-react'
import { Clock } from 'lucide-react'

export function HackerNewsCard({ post }) {
    const [copied, setCopied] = useState(false)
    return (
        <Card className="bg-white border border-gray-200 shadow-sm relative max-h-32 max-w-sm p-2">
            <CardHeader className="flex flex-row justify-between p-1 h-10">
                <div className="max-w-[200px] whitespace-wrap">
                    <Link href={post?.url ? post.url : 'https://news.ycombinator.com/'} rel="noopener noreferrer" target="_blank">
                        <CardTitle className="hover:underline text-gray-800 text-sm">{post.title}</CardTitle>
                    </Link>
                </div>
                <div>
                    <Button variant="secondary" size="sm"
                        onClick={(e) => {
                            e.stopPropagation();
                            navigator.clipboard.writeText(post.url)
                            setCopied(true)
                            setTimeout(() => setCopied(false), 1000)
                        }}>
                        <span className="text-sm">{!copied ? "Share" : "Copied"}</span>
                        <Image
                            src={hackerNewsIcon}
                            className="ml-2"
                            height={16}
                            alt="Stack Overflow Icon"
                        />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="p-1 h-20 flex flex-col justify-end">
                <div className="flex space-x-2 text-xs text-gray-600 flex-wrap">
                    <div className="flex items-center">
                        <MessageCircle className="mr-1 h-3 w-3 fill-orange-600 text-orange-600" />
                        {post.num_comments} comments
                    </div>
                    <div className="flex items-center">
                        <ThumbsUp className="mr-1 h-3 w-3 fill-orange-600 text-orange-600" />
                        {post.points} points
                    </div>
                    <Link href={`https://news.ycombinator.com/user?id=${post.author}`} rel="noopener noreferrer" target="_blank">
                        <div className="flex items-center">
                            <User className="mr-1 h-3 w-3 text-orange-600" />
                            by {post.author}
                        </div>
                    </Link>
                    <div className="flex items-center">
                        <Clock className="mr-1 h-3 w-3 text-green-600" />
                        Posted {timeAgo(post.created_at_i)}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

function openInNewTab(url: string) {
    window ?? window.open(url, '_blank').focus();
}

function timeAgo(utcTime: number): string {
    const now = new Date();
    const diff = now.getTime() / 1000 - utcTime; // convert to seconds
    const seconds = Math.floor(diff);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days}d ago`;
    } else if (hours > 0) {
        return `${hours}h ago`;
    } else if (minutes > 0) {
        return `${minutes}m ago`;
    } else {
        return `${seconds}s ago`;
    }
}