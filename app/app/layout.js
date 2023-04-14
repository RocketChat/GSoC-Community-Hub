/* eslint-disable import/no-unresolved */
import '../styles/vars.css';
import '../styles/globals.css';
import '../styles/Layout.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@palanikannan1437/rc4community-navbar/styles.css';
import { fetchNavData } from '@palanikannan1437/rc4community-navbar/core';
import Navbar from './nav';

import Footer from '../components/footer';

export default async function Layout(props) {
  const navData = await fetchNavData();
  const navItems = navData
    ? [
        { show: true, item: navData.variant1.data[0] },
        { show: true, item: navData.variant2.data[0] },
      ]
    : [];

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="announcement_strip">
          <a
            href="/conferences/c/GSoC-Alumni-Summit-2023"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <h6>
              📢 Join our GSoC&apos;23 Alumni Summit at{' '}
              {new Date('2023-03-30T06:00:00-04:00').toLocaleString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short',
              })}
            </h6>
          </a>
        </div>
        <Navbar navData={navData} navItems={navItems} />
        {props.children}
        <Footer />
      </body>
    </html>
  );
}
