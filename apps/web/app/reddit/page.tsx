// import RedditComponent, { getRedditPosts } from "@rc4-reddit/RedditComponent";

import { Reddit } from "@palanikannan1437/rc4-reddit";

export default async function Home() {
    // const posts = await getRedditPosts("blender");

    return (
        <>
            <Reddit id="blender" />
        </>
    );
}