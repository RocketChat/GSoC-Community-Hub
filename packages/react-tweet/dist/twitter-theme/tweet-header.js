import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import { AvatarImg } from './avatar-img.js';
import { Verified, VerifiedGovernment, VerifiedBusiness } from './icons/index.js';
import s from './tweet-header.module.css';
export const TweetHeader = ({ tweet, components })=>{
    var _components;
    var _components_AvatarImg;
    const Img = (_components_AvatarImg = (_components = components) == null ? void 0 : _components.AvatarImg) != null ? _components_AvatarImg : AvatarImg;
    const { user } = tweet;
    const verified = user.verified || user.is_blue_verified || user.verified_type;
    let icon = /*#__PURE__*/ _jsx(Verified, {});
    let iconClassName = s.verifiedBlue;
    if (verified) {
        if (!user.is_blue_verified) {
            iconClassName = s.verifiedOld;
        }
        switch(user.verified_type){
            case 'Government':
                icon = /*#__PURE__*/ _jsx(VerifiedGovernment, {});
                iconClassName = s.verifiedGovernment;
                break;
            case 'Business':
                icon = /*#__PURE__*/ _jsx(VerifiedBusiness, {});
                iconClassName = null;
                break;
        }
    }
    return /*#__PURE__*/ _jsxs("div", {
        className: s.header,
        children: [
            /*#__PURE__*/ _jsxs("a", {
                href: tweet.url,
                className: s.avatar,
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: clsx(s.avatarOverflow, user.profile_image_shape === 'Square' && s.avatarSquare),
                        children: /*#__PURE__*/ _jsx(Img, {
                            src: user.profile_image_url_https,
                            alt: user.name,
                            width: 48,
                            height: 48
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: s.avatarOverflow,
                        children: /*#__PURE__*/ _jsx("div", {
                            className: s.avatarShadow
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: s.author,
                children: [
                    /*#__PURE__*/ _jsxs("a", {
                        href: tweet.url,
                        className: s.authorLink,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: s.authorLinkText,
                                children: /*#__PURE__*/ _jsx("span", {
                                    title: user.name,
                                    children: user.name
                                })
                            }),
                            verified && /*#__PURE__*/ _jsx("div", {
                                className: clsx(s.authorVerified, iconClassName),
                                children: icon
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: s.authorMeta,
                        children: [
                            /*#__PURE__*/ _jsx("a", {
                                href: tweet.url,
                                className: s.username,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ _jsxs("span", {
                                    title: `@${user.screen_name}`,
                                    children: [
                                        "@",
                                        user.screen_name
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: s.authorFollow,
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        className: s.separator,
                                        children: "\xb7"
                                    }),
                                    /*#__PURE__*/ _jsx("a", {
                                        href: user.follow_url,
                                        className: s.follow,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Follow"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("a", {
                href: tweet.url,
                className: s.brand,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "View on Twitter",
                children: /*#__PURE__*/ _jsx("svg", {
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    className: s.twitterIcon,
                    children: /*#__PURE__*/ _jsx("g", {
                        children: /*#__PURE__*/ _jsx("path", {
                            d: "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                        })
                    })
                })
            })
        ]
    });
};
