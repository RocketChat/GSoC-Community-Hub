import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "./components/RocketChatLogo";

const config: DocsThemeConfig = {
  logo: <span>RC4Community</span>,
  project: {
    link: "https://github.com/Palanikannan1437/RC4-Starter-Pack",
  },
  chat: {
    link: "http://open.rocket.chat/",
    icon: <Logo />,
  },
  docsRepositoryBase: "https://github.com/Palanikannan1437/RC4Community-Turbo",
  footer: {
    text: "RC4Community Docs",
  },
};

export default config;
