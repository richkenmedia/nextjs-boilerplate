import { useState } from 'react';
import Head from 'next/head';
import {
  Container,
  Row,
  Col,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from '../components/vendor/reactstrap';

export default function Home() {
  // if the following return has more than tags then wrap them in ()
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <nav className="navbar navbar-expanded-lg navbar-dark bg-info">
        <Container fluid={true}>
          {/* Brand Logo Text */}
          <NavbarBrand href="/" className="mr-auto">
            Mega Menu
          </NavbarBrand>
          {/* Brand Logo Text Ends */}
          {/* Responsive Menu */}
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          {/* Responsive Menu Ends */}
        </Container>
      </nav>
    </>
  );
}
