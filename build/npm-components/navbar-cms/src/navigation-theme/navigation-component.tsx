'use client';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationPropsT, NavigationMenuItemPropsT } from '../types';

const Navigation = ({ data, container }: NavigationPropsT) => {
  return (
    <Navbar
      expand='lg'
      className='bg-body-tertiary'
      style={container}
    >
      <Container>
        <Navbar.Brand
          href='/'
          className=''
        >
          <img
            src={'/logo.svg'}
            alt='My Image'
            height={200}
            width={200}
            className='logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {data.map((item: any) => (
              <NavigationMenuItem
                key={item.id}
                item={item}
              />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const NavigationMenuItem = ({ item }: NavigationMenuItemPropsT) => {
  if (item.type === 'link') {
    return <Nav.Link href={item.link}>{item.label}</Nav.Link>;
  } else if (item.type === 'dropdown') {
    return (
      <NavDropdown
        title={item.label}
        id={`dropdown-${item.id}`}
      >
        {item.dropdown.map((dropdownItem, index) => (
          <NavDropdown.Item
            key={index}
            href={dropdownItem.link}
          >
            {dropdownItem.label}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    );
  }
  return null;
};

export default Navigation;
