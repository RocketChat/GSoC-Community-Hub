"use client"
import { MessageCircle, Star, ArrowBigUp } from "lucide-react"
import redditIcon from "./reddit-3.png"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ClipboardCheck } from "lucide-react";
import { useState } from "react";
import { ClipboardCopy } from "lucide-react";
import Image from "next/image"
import Link from "next/link"

export function RedditCard({ post }) {
    const [copied, setCopied] = useState(false)
    return (
        <Card onClick={() => openInNewTab(post.url)}>
            <CardHeader className="grid grid-cols-[1fr_120px] items-start gap-4 space-y-0">
                <div className="space-y-1">
                    <Link href={post.url} rel="noopener noreferrer" target="_blank">
                        <CardTitle className="hover:underline">{post?.title}</CardTitle>
                    </Link>
                </div>
                <div className="flex items-center rounded-md bg-secondary text-secondary-foreground">
                    <Button variant="secondary"
                        onClick={() => {
                            navigator.clipboard.writeText(post.url)
                            setCopied(true)
                            setTimeout(() => setCopied(false), 1000)
                        }}>
                        {!copied ?
                            <ClipboardCopy className="mr-2 h-4 w-4" /> : <ClipboardCheck className="mr-2 h-4 w-4" />}
                        {!copied ? "Share" : "Copied"}
                    </Button>
                    <Image
                        src={redditIcon}
                        className="mr-3"
                        alt="Picture of the author"
                    />
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                        <MessageCircle className="mr-1 h-4 w-4 fill-orange-600 text-orange-600" />
                        {post.comments}
                    </div>
                    <div className="flex items-center">
                        <ArrowBigUp className="mr-1 h-4 w-6" />
                        {post.upvotes}
                    </div>
                    <div>Posted {timeAgo(post.time_ago)}</div>
                </div>
            </CardContent>
        </Card>
    )
}

function openInNewTab(url: string) {
    console.log("somfasd", window)
    window ?? window.open(url, '_blank').focus();
}

function timeAgo(utcTime: number): string {
    const now = new Date();
    const diff = now.getTime() - utcTime * 1000; // convert to milliseconds
    const seconds = Math.floor(diff / 1000);
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

