import HackerNewsComponent from "@palanikannan1437/rc4community-hackernews/HackerNewsComponent";
import {getHackerNewsPosts} from "@palanikannan1437/rc4community-hackernews/functions";

export default async function Home() {
    const posts = await getHackerNewsPosts("blender");
    const posts1 = await getHackerNewsPosts("rocketchat");
    return (
        <>
            <HackerNewsComponent posts={posts} />
            <HackerNewsComponent posts={posts1} />
        </>
    );
}