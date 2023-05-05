/* eslint-disable import/no-unresolved */

'use client';

import * as React from 'react';
import { NavDemo } from '@palanikannan1437/rc4community-navbar';
import { Button } from 'react-bootstrap';
import BrandLogo from '../components/brandlogo';

export function CustomNavBar({ navData, navItems }) {
  return (
    <NavDemo
      layoutVariant="center"
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
      logoSec={<Button variant="outline-danger">Join</Button>}
    />
  );
}

export default CustomNavBar;
