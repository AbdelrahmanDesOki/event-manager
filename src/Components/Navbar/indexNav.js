import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtnLink, NavBtn } from './NavbarElements'
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Event Manager</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/support" activeStyle>
            Support
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