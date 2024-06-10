"use client"
import { MessageCircle, Star, CheckCircle, Clock } from "lucide-react"
import stackOverflowIcon from "./stack-overflow.png"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import { Eye } from "lucide-react"

export function StackOverflowCard({ question }) {
    const [copied, setCopied] = useState(false)
    return (
        <Card onClick={() => openInNewTab(question.link)} className="bg-white border border-gray-200 shadow-sm relative max-h-32 max-w-sm p-2">
            <CardHeader className="flex flex-row justify-between p-1 h-10">
                <div className="max-w-[250px] whitespace-wrap">
                    <Link href={question.link} rel="noopener noreferrer" target="_blank">
                        <CardTitle className="hover:underline text-gray-800 text-sm">{question?.title}</CardTitle>
                    </Link>
                </div>
                <div>
                    <Button variant="secondary" size="sm"
                        onClick={(e) => {
                            e.stopPropagation();
                            navigator.clipboard.writeText(question.link)
                            setCopied(true)
                            setTimeout(() => setCopied(false), 1000)
                        }}>
                        <span className="text-sm">{!copied ? "Share" : "Copied"}</span>
                        <Image
                            src={stackOverflowIcon}
                            className="ml-2"
                            height={16}
                            alt="Stack Overflow Icon"
                        />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="p-1 h-20 flex flex-col justify-end">
                <div className="flex flex-wrap">
                    {question.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-200 text-gray-800 px-1 py-0.5 mr-1 mb-1 rounded text-xs">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-2 text-xs text-gray-600 flex-wrap">
                    <div className="flex items-center">
                        <MessageCircle className="mr-1 h-3 w-3 fill-orange-600 text-orange-600" />
                        {question.answer_count} answers
                    </div>
                    <div className="flex items-center">
                        <Star className="mr-1 h-3 w-3 text-orange-600" />
                        {question.score} votes
                    </div>
                    <div className="flex items-center">
                        <Eye className="mr-1 h-3 w-3 text-gray-600" />
                        {question.view_count} views
                    </div>
                    {question.is_answered && (
                        <div className="flex items-center">
                            <CheckCircle className="mr-1 h-3 w-3 text-green-600" />
                            Answer accepted
                        </div>
                    )}
                    <div className="flex items-center">
                        <Clock className="mr-1 h-3 w-3 text-green-600" />
                        Posted {timeAgo(question.creation_date)}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
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