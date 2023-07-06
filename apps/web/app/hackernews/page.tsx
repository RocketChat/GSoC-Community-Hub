import HackerNewsComponent, { getHackerNewsPosts } from "@rc4-hackernews/HackerNewsComponent";

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