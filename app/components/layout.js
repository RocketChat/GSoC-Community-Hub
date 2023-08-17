import '../styles/Layout.module.css';
import Footer from './footer';
import { MenuBar } from './menubar';

function Layout(props) {
  return (
    <>
      <div className="announcement_strip">
        <a
          href="/conferences/c/GSoC-23-Demo-Day"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <h6>
            📢 Join our GSoC&apos;23 Demo Day at{' '}
            {new Date('2023-08-24T11:00:00.000Z').toLocaleString('en-GB', {
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
      <MenuBar menu={props.menu.topNavItems} brandInfo={props.brandInfo} />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
