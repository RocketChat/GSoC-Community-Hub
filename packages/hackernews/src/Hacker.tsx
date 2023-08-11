import { Suspense } from 'react'
import { getHackerNewsPosts } from './functions'
import HackerNewsComponent from './HackerNewsComponent.mjs'

const HackerNewsContent = async ({
    id,
}: { id: string }) => {
    const posts = await getHackerNewsPosts(id)

    return <HackerNewsComponent posts={posts} />
}

export const HackerNews = (id: { id: string }) => (
    <Suspense>
        {/* @ts-ignore: Async components are valid in the app directory */}
        <HackerNewsContent id={id} />
    </Suspense>
)