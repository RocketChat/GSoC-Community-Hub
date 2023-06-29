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


const getRedditPost = async (type: "top" | "new" | "hot") => {
    let res;
    await fetch(`https://www.reddit.com/r/blender/${type}.json?limit=10`)
        .then((response) => response.json())
        .then((data) => {
            const fetchedPosts = data.data.children.map((post: any) => ({
                id: post.data.id,
                title: post.data.title,
                url: post.data.url,
                comments: post.data.num_comments,
                upvotes: post.data.ups,
                time_ago: post.data.created_utc
            }));
            res = fetchedPosts;
        })
        .catch((err) => {
            console.log(err);
        });
    return res;
}

export default async function Home() {
    const topPosts = await getRedditPost("top");
    const newPosts = await getRedditPost("new");
    const hotPosts = await getRedditPost("hot");

    return (
        <>
            <div className="container mx-auto p-8">
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
        </>
    );
}