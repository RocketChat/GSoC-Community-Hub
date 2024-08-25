import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import Navigation from './navigation-theme/navigation-component.js';
const NavigationContent = async ({ data, container })=>{
    return /*#__PURE__*/ _jsx(Navigation, {
        data: data,
        container: container
    });
};
export const NavigationMenuDemo = ({ data, container })=>{
    return /*#__PURE__*/ _jsx(Suspense, {
        children: /*#__PURE__*/ _jsx(NavigationContent, {
            container: container,
            data: data
        })
    });
};
