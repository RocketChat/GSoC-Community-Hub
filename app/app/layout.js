import '../styles/vars.css';
import '../styles/globals.css';
import '../styles/Layout.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/footer';
import { MenuBar } from '../components/menubar';
import { fetchAPI } from '../lib/api';

async function Layout(props) {
  const topNavItems = await fetchAPI('/top-nav-item');
  const brandInfo = {
    brandLogoSrc:
      'https://global-uploads.webflow.com/611a19b9853b7414a0f6b3f6/611bbb87319adfd903b90f24_logoRC.svg',
    brandLink: '/',
    imageTitle: 'Rocket.Chat',
    brandName: 'Rocket.Chat Community',
  };
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
        <MenuBar menu={topNavItems} brandInfo={brandInfo} />
        {props.children}
        <Footer />
      </body>
    </html>
  );
}

export default Layout;
