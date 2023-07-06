import RedditComponent, { getRedditPosts } from "@rc4-reddit/RedditComponent";

export default async function Home() {
    const posts = await getRedditPosts("blender");
 
    return (
        <>
            <RedditComponent posts={posts} />
        </>
    );
}