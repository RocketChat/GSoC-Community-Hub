'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
const Navigation = ({ data, container })=>{
    return /*#__PURE__*/ _jsx(Navbar, {
        expand: "lg",
        className: "bg-body-tertiary",
        style: container,
        children: /*#__PURE__*/ _jsxs(Container, {
            children: [
                /*#__PURE__*/ _jsx(Navbar.Brand, {
                    href: "/",
                    className: "",
                    children: /*#__PURE__*/ _jsx("img", {
                        src: '/logo.svg',
                        alt: "My Image",
                        height: 200,
                        width: 200,
                        className: "logo"
                    })
                }),
                /*#__PURE__*/ _jsx(Navbar.Toggle, {
                    "aria-controls": "basic-navbar-nav"
                }),
                /*#__PURE__*/ _jsx(Navbar.Collapse, {
                    id: "basic-navbar-nav",
                    children: /*#__PURE__*/ _jsx(Nav, {
                        className: "me-auto",
                        children: data.map((item)=>/*#__PURE__*/ _jsx(NavigationMenuItem, {
                                item: item
                            }, item.id))
                    })
                })
            ]
        })
    });
};
const NavigationMenuItem = ({ item })=>{
    if (item.type === 'link') {
        return /*#__PURE__*/ _jsx(Nav.Link, {
            href: item.link,
            children: item.label
        });
    } else if (item.type === 'dropdown') {
        return /*#__PURE__*/ _jsx(NavDropdown, {
            title: item.label,
            id: `dropdown-${item.id}`,
            children: item.dropdown.map((dropdownItem, index)=>/*#__PURE__*/ _jsx(NavDropdown.Item, {
                    href: dropdownItem.link,
                    children: dropdownItem.label
                }, index))
        });
    }
    return null;
};
export default Navigation;
