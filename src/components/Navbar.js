
import React from 'react';
import '../styles/style.css';
import '../styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Container } from 'react-bootstrap';


const FSNavbar = ({ darkMode, setDarkMode }) => (
  <header className="header_section">
    <Navbar expand="lg" className="custom_nav-container impressive-navbar" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/" className="impressive-navbar-brand">
          <span>FREELANCE SOLUTIONS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" className="impressive-navbar-toggle" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/service">Services</Nav.Link>
            <Nav.Link href="/price">Special Pricing</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
          <div className="quote_btn-container" style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
            <span className="dark-mode-toggle" title="Toggle dark mode" style={{ marginRight: '10px' }} onClick={() => {
              setDarkMode(!darkMode);
              localStorage.setItem('fs_dark_mode', !darkMode ? '1' : '0');
            }}>{darkMode ? '☀️' : '🌙'}</span>
            <a href="tel:+27 63 337 7293" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
              <span>Call : +27 63 337 7293</span>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default FSNavbar;
