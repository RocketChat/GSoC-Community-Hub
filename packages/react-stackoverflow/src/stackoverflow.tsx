import { Suspense } from 'react'
import { getStackOverflowQuestions } from './api/index.js'
import StackOverflowComponent from './stackoverflow-theme/stackoverflow-component.js'

const StackOverflowContent = async ({
    id, styleOverrides, apiKey
}: { id: string, apiKey: string, styleOverrides?: { main?: string, container?: string, tabs?: string, tabsList?: string, tabsContent?: string } }) => {
    const posts = await getStackOverflowQuestions(id, apiKey)
    return <StackOverflowComponent questions={posts} />
}

export const StackOverflow = ({
    ...props
}) => (
    <Suspense>
        {/* @ts-ignore: Async components are valid in the app directory */}
        <StackOverflowContent {...props} />
    </Suspense>
)