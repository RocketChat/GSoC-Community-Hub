import '../styles/vars.css';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Layout from '../components/layout';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const brandInfo = {
    brandLogoSrc:
      'https://global-uploads.webflow.com/611a19b9853b7414a0f6b3f6/611bbb87319adfd903b90f24_logoRC.svg',
    brandLink: '/',
    imageTitle: 'Rocket.Chat',
    brandName: 'Rocket.Chat Community',
  };
  return (
    <SSRProvider>
      <Layout menu={pageProps} brandInfo={brandInfo}>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
