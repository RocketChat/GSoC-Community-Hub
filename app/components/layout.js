import '../styles/Layout.module.css';
import Footer from './footer';
import { MenuBar } from './menubar';

function Layout(props) {
  return (
    <>
      <MenuBar menu={props.menu.topNavItems} brandInfo={props.brandInfo} />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
