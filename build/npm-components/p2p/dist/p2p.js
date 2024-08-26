import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { Suspense } from 'react';
import { getLinks } from './api/index.js';
const p2pContent = async ()=>{
    const links = await getLinks();
    console.log("==============", links.navItems);
    return /*#__PURE__*/ _jsx("p2pComponent", {});
};
export const p2p = ({})=>/*#__PURE__*/ _jsx(Suspense, {
        children: /*#__PURE__*/ _jsx("p2pContent", {})
    });
