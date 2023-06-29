import RedditPost from "./RedditPost";

const getRedditPost = async () => {
    let res;
    await fetch(`https://www.reddit.com/r/blender/top.json?limit=10`)
        .then((response) => response.json())
        .then((data) => {
            const fetchedPosts = data.data.children.map((post: any) => ({
                id: post.data.id,
                title: post.data.title,
                url: post.data.url,
            }));
            res = fetchedPosts;
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        });
    return res;
}

export default async function Home() {
    const posts = await getRedditPost();

    return (
        <>
            <div className="container mx-auto p-8">
                <h1 className="text-3xl mb-6 text-center text-white">Top 10 Reddit Posts:</h1>
                <div className="grid grid-cols-2 gap-6">
                    {posts.map((post) => (
                        <RedditPost key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </>
    );
}