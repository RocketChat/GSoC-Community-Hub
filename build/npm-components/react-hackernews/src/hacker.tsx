import { Suspense } from 'react'
import { getHackerNewsPosts } from './api/index.js'
import HackerNewsComponent from './hackernews-theme/hackernews-component.jsx'

const HackerNewsContent = async ({
    id, styleOverrides
}: { id: string, styleOverrides?: { main?: string, container?: string, tabs?: string, tabsList?: string, tabsContent?: string } }) => {
    const posts = await getHackerNewsPosts(id)
    return <HackerNewsComponent posts={posts} styleOverrides={styleOverrides} />
}

export const Hacker = ({
    ...props
}) => (
    <Suspense>
        {/* @ts-ignore: Async components are valid in the app directory */}
        <HackerNewsContent {...props} />
    </Suspense>
)