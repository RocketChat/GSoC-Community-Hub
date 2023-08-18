"use client"
import { MessageCircle, Star, ArrowBigUp } from "lucide-react"
import { ClipboardCheck } from "lucide-react";
import { useState } from "react";
import { ClipboardCopy } from "lucide-react";
import Image from "next/image"
import Link from "next/link"
import { RedditPost, openInNewTab, timeAgo } from "../api"
import { Button, Card, CardContent, CardHeader, CardTitle } from "./components";

export function RedditCard({ post }: { post: RedditPost }) {
    const [copied, setCopied] = useState(false)
    return (
        <Card onClick={() => openInNewTab(post.url)} className="bg-white border border-gray-200 shadow-sm relative max-h-32 max-w-sm p-2">
            <CardHeader className="flex flex-row justify-between p-1 h-10">
                <div className="max-w-[250px] whitespace-wrap">
                    <Link href={post.url} rel="noopener noreferrer" target="_blank">
                        <CardTitle className="hover:underline text-gray-800 text-sm">{post?.title}</CardTitle>
                    </Link>
                </div>
                <div >
                    <Button variant="secondary"
                        size="sm"
                        onClick={() => {
                            navigator.clipboard.writeText(post.url)
                            setCopied(true)
                            setTimeout(() => setCopied(false), 1000)
                        }}>
                        {!copied ?
                            <ClipboardCopy className="mr-2 h-4 w-4" /> : <ClipboardCheck className="mr-2 h-4 w-4" />}
                        {!copied ? "Share" : "Copied"}
                    </Button>
                    {/* <Image
                        src={redditIcon}
                        className="mr-3"
                        alt="Picture of the author"
                    /> */}
                </div>
            </CardHeader>
            <CardContent className="p-1 h-20 flex flex-col justify-end">
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