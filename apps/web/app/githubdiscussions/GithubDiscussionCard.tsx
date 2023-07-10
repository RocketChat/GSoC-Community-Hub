"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import githubIcon from "./github.png"
import { User } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';


export function GithubDiscussionCard({ discussion }) {
    const [copied, setCopied] = useState(false)
    return (
        <Card className="bg-white border border-gray-200 shadow-sm relative max-h-32 max-w-sm p-2">
            <CardHeader className="flex flex-row justify-between p-1 h-10">
                <div className="max-w-[250px] whitespace-wrap">
                    <Link href={discussion.url} rel="noopener noreferrer" target="_blank">
                        <CardTitle className="hover:underline text-gray-800 text-sm">{discussion.title}</CardTitle>
                    </Link>
                </div>
                <div>
                    <Button variant="secondary" size="sm"
                        onClick={(e) => {
                            e.stopPropagation();
                            navigator.clipboard.writeText(discussion.url)
                            setCopied(true)
                            setTimeout(() => setCopied(false), 1000)
                        }}>
                        <span className="text-sm">{!copied ? "Share" : "Copied"}</span>
                        <Image
                            src={githubIcon}
                            className="ml-2"
                            height={16}
                            alt="Stack Overflow Icon"
                        />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="p-1 h-20 flex flex-col justify-end">
                <div className="flex space-x-2 text-xs text-gray-600 flex-wrap">
                    <Link href={`https://github.com/${discussion.author.login}`} rel="noopener noreferrer" target="_blank">
                        <div className="flex items-center">
                            <User className="mr-1 h-3 w-3 text-gray-800" />
                            by {discussion.author.login}
                        </div>
                    </Link>
                    <div className="flex items-center">
                        <MessageCircle className="mr-1 h-3 w-3 fill-gray-800 text-gray-800" />
                        {discussion.comments.totalCount}  comments
                    </div>
                    <div className="flex items-center">
                        <Star className="mr-1 h-3 w-3 text-gray-800" />
                        {discussion.reactions.totalCount} reactions
                    </div>
                    {discussion.answerChosenAt && (
                        <div className="flex items-center">
                            <CheckCircle className="mr-1 h-3 w-3 text-green-600" />
                            Answer accepted
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

function timeAgo(utcTime: number): string {
    const now = new Date();
    const diff = now.getTime() - utcTime;
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