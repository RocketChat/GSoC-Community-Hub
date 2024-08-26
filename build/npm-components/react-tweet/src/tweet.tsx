import { Suspense } from 'react'
import { getTweet } from './api/index.js'
import {
  EmbeddedTweet,
  TweetNotFound,
  TweetSkeleton,
} from './twitter-theme/components.js'
import type { TweetProps } from './swr.js'
export type { TweetProps }

type TweetContentProps = Omit<TweetProps, 'fallback'>

const TweetContent = async ({
  id,
  components,
  fetchOptions,
  onError,
}: TweetContentProps) => {
  let error
  const tweet = id
    ? await getTweet(id, fetchOptions).catch((err) => {
        if (onError) {
          error = onError(err)
        } else {
          console.error(err)
          error = err
        }
      })
    : undefined

  if (!tweet) {
    const NotFound = components?.TweetNotFound || TweetNotFound
    return <NotFound error={error} />
  }

  return <EmbeddedTweet tweet={tweet} components={components} />
}

export const Tweet = ({
  fallback = <TweetSkeleton />,
  ...props
}: TweetProps) => (
  <Suspense fallback={fallback}>
    {/* @ts-ignore: Async components are valid in the app directory */}
    <TweetContent {...props} />
  </Suspense>
)
