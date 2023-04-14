'use client';

import * as React from 'react';
import { NavDemo } from '@palanikannan1437/rc4community-navbar';
import BrandLogo from '../components/brandlogo';

export function CustomNavBar({ navData, navItems }) {
  return (
    <NavDemo
      logo={
        <BrandLogo
          brandLink="/"
          brandLogoSrc="https://global-uploads.webflow.com/611a19b9853b7414a0f6b3f6/611bbb87319adfd903b90f24_logoRC.svg"
          imageTitle="Rocket.Chat"
          brandName="Rocket.Chat Community"
          height={32}
          width={98}
        />
      }
      navData={navData}
      navItems={navItems}
      logoSec={
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Sign In
        </button>
      }
    />
  );
}

export default CustomNavBar;
