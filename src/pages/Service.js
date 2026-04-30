import React from 'react';
import FSNavbar from '../components/Navbar';
import ScrollAnimatedElement from '../components/ScrollAnimatedElement';
import '../styles/style.css';
import '../styles/responsive.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Service = ({ darkMode, setDarkMode }) => {
  const { t } = useTranslation();

  return (
    <div className="hero_area">
      <FSNavbar />
      <section className="service_section layout_padding">
        <div className="container">
          <ScrollAnimatedElement animation="fade-up" delay={0}>
            <div className="heading_container heading_center">
              <h2>{t('services.heading')}</h2>
            </div>
          </ScrollAnimatedElement>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <ScrollAnimatedElement animation="fade-up" delay={100}>
                <div className="box">
                  <div className="img-box">
                    <img src="/images/service_icon (1).png" alt="Website Development" />
                  </div>
                  <div className="detail-box">
                    <h4>{t('services.webdev.title')}</h4>
                    <p>{t('services.webdev.description')}</p>
                    <a href="https://wa.me/+27633377293" target="_blank" rel="noopener noreferrer">{t('common.contactUs')}</a>
                  </div>
                </div>
              </ScrollAnimatedElement>
            </div>
            <div className="col-md-6 col-lg-4">
              <ScrollAnimatedElement animation="fade-up" delay={200}>
                <div className="box">
                  <div className="img-box">
                    <img src="/images/service_icon (2).png" alt={t('services.redesign.alt')} />
                  </div>
                  <div className="detail-box">
                    <h4>{t('services.redesign.title')}</h4>
                    <p>{t('services.redesign.description')}</p>
                    <a href="https://wa.me/+27633377293" target="_blank" rel="noopener noreferrer">{t('common.contactUs')}</a>
                  </div>
                </div>
              </ScrollAnimatedElement>
            </div>
            <div className="col-md-6 col-lg-4">
              <ScrollAnimatedElement animation="fade-up" delay={300}>
                <div className="box">
                  <div className="img-box">
                    <img src="/images/service_icon (3).png" alt={t('services.graphics.alt')} />
                  </div>
                  <div className="detail-box">
                    <h4>{t('services.graphics.title')}</h4>
                    <p>{t('services.graphics.description')}</p>
                    <a href="https://wa.me/+27633377293" target="_blank" rel="noopener noreferrer">{t('common.contactUs')}</a>
                  </div>
                </div>
              </ScrollAnimatedElement>
            </div>
          </div>
        </div>
      </section>
      {/* Info Section */}
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info_contact">
                <h4>{t('home.footer.address.title')}</h4>
                <div className="contact_link_box">
                  <a href="https://wa.me/+27633377293" target="_blank" rel="noopener noreferrer"><span>{t('home.footer.address.location')}</span></a>
                  <a href="https://wa.me/+27633377293" target="_blank" rel="noopener noreferrer"><span>{t('home.footer.address.phone')}</span></a>
                  <a href="/contact"><span style={{ fontSize: '0.9em' }}>{t('home.footer.address.email')}</span></a>
                </div>
              </div>
              <div className="info_social">
                <a href="https://www.facebook.com/share/1ByDkVn8fw/"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.tiktok.com/@freelance.solutio?_t=ZM-8vlpqE3eJrq&_r=1"><img src="/images/tiktok.png" alt="TikTok" style={{ width: 24, height: 24 }} /></a>
                <a href="https://www.instagram.com/freelance_solu25?igsh=MTdycHYwdnY3ajloaw=="><FontAwesomeIcon icon={faInstagram} /></a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_link_box">
                <h4>{t('home.footer.links.title')}</h4>
                <div className="info_links">
                  <a href="/">{t('home.footer.links.home')}</a>
                  <a href="/about">{t('home.footer.links.about')}</a>
                  <a className="active" href="/service">{t('home.footer.links.services')}</a>
                  <a href="/price">{t('home.footer.links.pricing')}</a>
                  <a href="/portfolio">{t('home.footer.links.portfolio')}</a>
                  <a href="/contact">{t('home.footer.links.contact')}</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_detail">
                <h4>{t('home.footer.info.title')}</h4>
                <p>{t('home.footer.info.description')}</p>
              </div>
            </div>
            <div className="col-md-3 mb-0">
              <h4>{t('home.footer.subscribe.title')}</h4>
              <form className="subscribe-form">
                <input type="text" placeholder={t('home.footer.subscribe.placeholder')} />
                <button type="submit">{t('home.footer.subscribe.button')}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="footer_section">
        <div className="container">
          <p>{t('© 2025 All Rights Reserved By FREELANCE SOLUTIONS', { year: new Date().getFullYear() })}</p>
        </div>
      </footer>
    </div>
  );
};

export default Service;
