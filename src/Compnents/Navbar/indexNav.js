import React from 'react'
import Auth from '../Login/Auth';
import { Nav, NavLink, Bars, NavMenu, NavBtnLink, NavBtn } from './NavbarElements'
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/auth"> Log In or Sign up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar