import * as React from 'react';
import { Suspense } from 'react'
import { getLinks } from './api/index.js'
import p2pComponent from './p2p-theme/p2p-component.js'

const p2pContent = async () => {
    const links = await getLinks()
    console.log("==============",links.navItems)
    return <p2pComponent/>
}

export const p2p = ({}) => (
    <Suspense>
        {/* @ts-ignore: Async components are valid in the app directory */}
        <p2pContent/>
        {/* <h1>hiiii</h1> */}
    </Suspense>
)