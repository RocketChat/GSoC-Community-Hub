import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import s from './tweet-container.module.css';
import './theme.css';
export const TweetContainer = ({ className, children })=>/*#__PURE__*/ _jsx("div", {
        className: clsx('react-tweet-theme', s.root, className),
        children: /*#__PURE__*/ _jsx("article", {
            className: s.article,
            children: children
        })
    });
