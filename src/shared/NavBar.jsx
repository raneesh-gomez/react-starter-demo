import React from 'react';
import { NavLink } from 'react-router-dom'
import { Navbar, NavbarBrand, Collapse, Nav, NavItem } from 'reactstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar
        color="dark"
        expand="md"
        dark
        container
      >
          <NavbarBrand href="/">
            React Demo
          </NavbarBrand>
          <Collapse navbar>
            <Nav
              className="me-auto navbar-custom"
              navbar
            >
              <NavItem>
                <NavLink
                  className="nav-link"
                  to="/pre-decomp"
                >
                  Without Decomposition
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  className="nav-link"
                  to="/post-decomp"
                >
                  With Decomposition
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  className="nav-link"
                  to="/hoc"
                >
                  HOC
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  className="nav-link"
                  to="/error-boundary"
                >
                  Error Boundary
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;