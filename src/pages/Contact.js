import React from 'react';
import FSNavbar from '../components/Navbar';
import ScrollAnimatedElement from '../components/ScrollAnimatedElement';
import '../styles/style.css';
import '../styles/responsive.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Contact = ({ darkMode, setDarkMode }) => {
  const { t } = useTranslation();

  return (
    <div className="hero_area">
      <FSNavbar />
      <section className="contact_section layout_padding">
        <div className="container">
          <ScrollAnimatedElement animation="fade-up" delay={0}>
            <div className="heading_container heading_center">
              <h2>{t('contact.title')}</h2>
            </div>
          </ScrollAnimatedElement>
          <div className="row">
            <div className="col-md-8 col-lg-6 mx-auto">
              <ScrollAnimatedElement animation="scale-up" delay={200}>
                <div className="form_container">
                  <form id="contact-form">
                    <div><input type="text" name="user_name" placeholder={t('contact.form.name')} required /></div>
                    <div><input type="email" name="user_email" placeholder={t('contact.form.email')} required /></div>
                    <div><input type="text" name="user_phone" placeholder={t('contact.form.phone')} required /></div>
                    <div><input type="text" name="message" className="message-box" placeholder={t('contact.form.message')} required /></div>
                    <div className="btn_box "><button type="submit" id="send-button">{t('contact.form.send')}</button></div>
                  </form>
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
                  <a href=""><span>{t('home.footer.address.location')}</span></a>
                  <a href="https://wa.me/+27633377293" target="_blank"><span>{t('home.footer.address.phone')}</span></a>
                  <a href=""><span style={{ fontSize: '0.9em' }}>{t('home.footer.address.email')}</span></a>
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
                  <a href="/service">{t('home.footer.links.services')}</a>
                  <a href="/price">{t('home.footer.links.pricing')}</a>
                  <a href="/portfolio">{t('home.footer.links.portfolio')}</a>
                  <a className="active" href="/contact">{t('home.footer.links.contact')}</a>
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
          <p>{t('home.footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
