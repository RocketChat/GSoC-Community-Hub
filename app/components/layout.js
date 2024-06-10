import '../styles/Layout.module.css';
import Footer from './footer';
import { MenuBar } from './menubar';

function Layout(props) {
  return (
    <>
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
      <MenuBar menu={props.menu.topNavItems} brandInfo={props.brandInfo} />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
