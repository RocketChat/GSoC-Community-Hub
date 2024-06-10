import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
import clsx from 'clsx';
import { getMediaUrl } from '../utils.js';
import { TweetMediaVideo } from './tweet-media-video.js';
import { MediaImg } from './media-img.js';
import s from './tweet-media.module.css';
export const TweetMedia = ({ tweet, components })=>{
    var _tweet_mediaDetails, _components, _tweet_mediaDetails1;
    var _tweet_mediaDetails_length;
    const length = (_tweet_mediaDetails_length = (_tweet_mediaDetails = tweet.mediaDetails) == null ? void 0 : _tweet_mediaDetails.length) != null ? _tweet_mediaDetails_length : 0;
    var _components_MediaImg;
    const Img = (_components_MediaImg = (_components = components) == null ? void 0 : _components.MediaImg) != null ? _components_MediaImg : MediaImg;
    return /*#__PURE__*/ _jsx("div", {
        className: s.root,
        children: (_tweet_mediaDetails1 = tweet.mediaDetails) == null ? void 0 : _tweet_mediaDetails1.map((media)=>/*#__PURE__*/ _jsxs(Fragment, {
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: s.skeleton,
                        style: media.type === 'photo' ? {
                            paddingBottom: `${100 / media.original_info.width * media.original_info.height}%`
                        } : undefined
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: clsx(s.mediaWrapper, length > 1 && s.grid2Columns, length === 3 && s.grid3, length > 4 && s.grid2x2),
                        children: media.type === 'photo' ? /*#__PURE__*/ _jsx("a", {
                            href: tweet.url,
                            className: clsx(s.mediaContainer, s.mediaLink),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ _jsx(Img, {
                                src: getMediaUrl(media, 'small'),
                                alt: media.ext_alt_text || 'Image',
                                className: s.image,
                                draggable: true
                            })
                        }, media.media_url_https) : /*#__PURE__*/ _jsx("div", {
                            className: s.mediaContainer,
                            children: /*#__PURE__*/ _jsx(TweetMediaVideo, {
                                tweet: tweet,
                                media: media
                            })
                        }, media.media_url_https)
                    })
                ]
            }, media.media_url_https))
    });
};
