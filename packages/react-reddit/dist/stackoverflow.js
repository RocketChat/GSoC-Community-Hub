import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { getStackOverflowQuestions } from './api/index.js';
import StackOverflowComponent from './stackoverflow-theme/stackoverflow-component.js';
const StackOverflowContent = async ({ id, styleOverrides })=>{
    const posts = await getStackOverflowQuestions(id);
    return /*#__PURE__*/ _jsx(StackOverflowComponent, {
        questions: posts
    });
};
export const StackOverflow = ({ ...props })=>/*#__PURE__*/ _jsx(Suspense, {
        children: /*#__PURE__*/ _jsx(StackOverflowContent, {
            ...props
        })
    });
