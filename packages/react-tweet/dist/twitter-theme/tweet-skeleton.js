import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TweetContainer } from './tweet-container.js';
import { Skeleton } from './skeleton.js';
import styles from './tweet-skeleton.module.css';
export const TweetSkeleton = ()=>/*#__PURE__*/ _jsxs(TweetContainer, {
        className: styles.root,
        children: [
            /*#__PURE__*/ _jsx(Skeleton, {
                style: {
                    height: '3rem',
                    marginBottom: '0.75rem'
                }
            }),
            /*#__PURE__*/ _jsx(Skeleton, {
                style: {
                    height: '6rem',
                    margin: '0.5rem 0'
                }
            }),
            /*#__PURE__*/ _jsx("div", {
                style: {
                    borderTop: 'var(--tweet-border)',
                    margin: '0.5rem 0'
                }
            }),
            /*#__PURE__*/ _jsx(Skeleton, {
                style: {
                    height: '2rem'
                }
            }),
            /*#__PURE__*/ _jsx(Skeleton, {
                style: {
                    height: '2rem',
                    borderRadius: '9999px',
                    marginTop: '0.5rem'
                }
            })
        ]
    });
