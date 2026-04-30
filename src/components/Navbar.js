
import React, { useState } from 'react';
import '../styles/style.css';
import '../styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const PHONE_NUMBERS = {
  za: { display: 'CALL : +27 63 337 7293', tel: '+27633377293' },
  cd: { display: 'CALL : +243 842 129 419', tel: '+243842129419' },
  gb: { display: '-------', tel: null },
};

const detectCountryFromBrowser = () => {
  const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  if (browserLang.startsWith('fr')) return 'cd';
  return 'za';
};

const getInitialCountry = () => localStorage.getItem('selectedCountry') || detectCountryFromBrowser();

const FSNavbar = ({ darkMode, setDarkMode }) => {
  const { t } = useTranslation();
  const [country, setCountry] = useState(getInitialCountry);

  const handleCountryChange = (countryCode) => {
    setCountry(countryCode);
  };

  const phone = PHONE_NUMBERS[country] || PHONE_NUMBERS.za;

  return (
  <header className="header_section">
    <Navbar expand="lg" className="custom_nav-container impressive-navbar" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/" className="impressive-navbar-brand">
          <span>FREELANCE SOLUTIONS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" className="impressive-navbar-toggle" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto">
            <Nav.Link href="/">{t('nav.home')}</Nav.Link>
            <Nav.Link href="/about">{t('nav.about')}</Nav.Link>
            <Nav.Link href="/service">{t('nav.services')}</Nav.Link>
            <Nav.Link href="/price">{t('nav.price')}</Nav.Link>
            <Nav.Link href="/portfolio">{t('nav.portfolio')}</Nav.Link>
            <Nav.Link href="/contact">{t('nav.contact')}</Nav.Link>
          </Nav>
          <div className="quote_btn-container" style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
            <LanguageSelector selectedCountry={country} onCountryChange={handleCountryChange} />
            <span className="dark-mode-toggle" title="Toggle dark mode" style={{ marginRight: '10px', marginLeft: '10px' }} onClick={() => {
              setDarkMode(!darkMode);
              localStorage.setItem('fs_dark_mode', !darkMode ? '1' : '0');
            }}>{darkMode ? '☀️' : '🌙'}</span>
            {phone.tel ? (
              <a href={`tel:${phone.tel}`} style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
                <span>{phone.display}</span>
              </a>
            ) : (
              <span style={{ color: '#fff', display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
                <span>{phone.display}</span>
              </span>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  );
};

export default FSNavbar;
