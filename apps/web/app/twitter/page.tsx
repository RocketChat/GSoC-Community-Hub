import querystring from 'querystring';
import Tweet from './EmbeddedTweet';

export default async function Home() {
    const tweets = await getTweets(["1586751198962495489", "1555793156847063040", "1560892185842941953", "1591643164196372480", "1590550565142290432", "1602540813338423296", "1596569166349467648", "1581497472043536385"]);

    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                {tweets.map((tweet) => (
                    <Tweet key={tweet.id} tweet={tweet} />
                ))}
            </div>
        </>
    );
}
export const getTweets = async (ids) => {
    const queryParams = querystring.stringify({
        ids: ids.join(','),
        expansions:
            'author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id',
        'tweet.fields':
            'attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text',
        'user.fields': 'id,name,profile_image_url,protected,url,username,verified',
        'media.fields':
            'duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics'
    });

    const response = await fetch(
        `https://api.twitter.com/2/tweets?${queryParams}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.TWITTER_API_KEY}`
            }
        }
    );

    console.log(process.env.TWITTER_API_KEY)

    if (!response.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    const tweets = await response.json();

    const getAuthorInfo = (author_id) => {
        return tweets.includes.users.find((user) => user.id === author_id);
    };

    const getReferencedTweets = (mainTweet) => {
        return (
            mainTweet?.referenced_tweets?.map((referencedTweet) => {
                const fullReferencedTweet = tweets.includes.tweets.find(
                    (tweet) => tweet.id === referencedTweet.id
                );

                return {
                    type: referencedTweet.type,
                    author: getAuthorInfo(fullReferencedTweet.author_id),
                    ...fullReferencedTweet
                };
            }) || []
        );
    };

    return tweets.data.reduce((allTweets, tweet) => {
        const tweetWithAuthor = {
            ...tweet,
            media:
                tweet?.attachments?.media_keys.map((key) =>
                    tweets.includes.media.find((media) => media.media_key === key)
                ) || [],
            referenced_tweets: getReferencedTweets(tweet),
            author: getAuthorInfo(tweet.author_id)
        };

        return [tweetWithAuthor, ...allTweets];
    }, []);
};