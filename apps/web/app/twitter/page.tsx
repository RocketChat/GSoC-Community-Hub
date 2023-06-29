import querystring from 'querystring';
import Tweet from './EmbeddedTweet';

export default async function Home() {
    // const tweets = await getTweets(["1586751198962495489", "1555793156847063040", "1560892185842941953", "1591643164196372480", "1590550565142290432", "1602540813338423296", "1596569166349467648", "1581497472043536385"]);

    const tweetsData = [
        {
            id: '1666060366848090112',
            text:  `A few days ago I attended the @DevtronL meetup here in Delhi✨ Though a biT LaTe🙄,had fun interacting with all the folks and got to discuss how CDEs (ofc @gitpod) could help  improve their team's workflow while increasing DevX for their community contributors too! \n\n#opensource`,
            author: { username: "Palanikannan_M", profile_image_url: 'https://pbs.twimg.com/profile_images/1596411480605609984/JINNrTiE_400x400.jpg' },
            created_at: '2023-06-29T00:00:00.000Z',
            public_metrics: {
                retweet_count: 10,
                reply_count: 2,
                like_count: 20,
                quote_count: 1,
            },
            referenced_tweets: [],
        },
        {
            id: '2',
            text: 'This is tweet 2',
            author: { username: "Palanikannan_M", profile_image_url: 'https://pbs.twimg.com/profile_images/1596411480605609984/JINNrTiE_400x400.jpg' },
            created_at: '2023-06-29T00:00:00.000Z',
            public_metrics: {
                retweet_count: 10,
                reply_count: 22,
                like_count: 25,
                quote_count: 1,
            },
            referenced_tweets: [],
        },
        {
            id: '3',
            text: 'This is tweet 3',
            author: { username: "Palanikannan_M", profile_image_url: 'https://pbs.twimg.com/profile_images/1596411480605609984/JINNrTiE_400x400.jpg' },
            created_at: '2023-06-29T00:00:00.000Z',
            public_metrics: {
                retweet_count: 10,
                reply_count: 2,
                like_count: 20,
                quote_count: 1,
            },
            referenced_tweets: [],
        },
        {
            id: '4',
            text: 'This is tweet 4',
            author: { username: "Palanikannan_M", profile_image_url: 'https://pbs.twimg.com/profile_images/1596411480605609984/JINNrTiE_400x400.jpg' },
            created_at: '2023-06-29T00:00:00.000Z',
            public_metrics: {
                retweet_count: 10,
                reply_count: 2,
                like_count: 20,
                quote_count: 1,
            },
            referenced_tweets: [],
        },
        {
            id: '10',
            text: 'This is tweet 10',
            author: { username: "Palanikannan_M", profile_image_url: 'https://pbs.twimg.com/profile_images/1596411480605609984/JINNrTiE_400x400.jpg' },
            created_at: '2023-06-29T00:00:10.000Z',
            public_metrics: {
                retweet_count: 100,
                reply_count: 20,
                like_count: 200,
                quote_count: 10,
            },
            referenced_tweets: [],
        },
    ];
    return (
        <>
            <div className="grid grid-cols-2 gap-4 w-[800px]">
                {tweetsData.map((tweet) => {
                    console.log(tweet)
                    return (
                        <Tweet key={tweet.id} tweet={tweet} />
                    )
                }
                )}
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