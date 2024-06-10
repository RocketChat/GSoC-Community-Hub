import { Suspense } from 'react'
import { getRedditPosts } from './api/index.js'
import RedditComponent from './reddit-theme/reddit-component.js'

const RedditContent = async ({
    id, styleOverrides
}: { id: string, styleOverrides?: { main?: string, container?: string, tabs?: string, tabsList?: string, tabsContent?: string } }) => {
    const posts = await getRedditPosts(id)
    return <RedditComponent posts={posts} />
}

export const Reddit = ({
    ...props
}) => (
    <Suspense>
        {/* @ts-ignore: Async components are valid in the app directory */}
        <RedditContent {...props} />
    </Suspense>
)