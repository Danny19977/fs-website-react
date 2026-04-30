import React from 'react';
import FSNavbar from '../components/Navbar';
import ScrollAnimatedElement from '../components/ScrollAnimatedElement';
import '../styles/style.css';
import '../styles/responsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const About = ({ darkMode, setDarkMode }) => {
  const { t } = useTranslation();
  return (
    <div className="hero_area">
  <FSNavbar />
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ScrollAnimatedElement animation="slide-in-left" delay={0}>
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>{t('about.title')}</h2>
                    <h4>{t('about.subtitle')}</h4>
                  </div>
                <p>{t('about.intro.p1')}</p>
                <p>{t('about.intro.p2')}</p>
                <p><strong>What We Do</strong><br />
                  ✔ Website Creation – Your website is your digital storefront. We design and develop sleek, user-friendly, and high-performing websites that engage visitors and turn them into loyal customers.<br />
                  ✔ Website Redesign – Is your website outdated, slow, or not bringing in results? We revamp and optimize your site to enhance user experience, boost speed, and improve search rankings.<br />
                  ✔ Online Presence – Being online is no longer optional—it’s a necessity. We help businesses build a strong and strategic digital presence through SEO, social media, branding, and content marketing, ensuring you’re always visible and competitive.<br />
                  ✔ Systems and Task Automation – Save time, reduce errors, and focus on what truly matters! We implement smart automation solutions that streamline repetitive tasks, manage workflows, and improve efficiency, so your business runs smoothly 24/7.<br />
                  ✔ Graphic Design – First impressions matter! Whether you need a logo, social media graphics, business cards, or branding materials, we craft stunning visuals that make your brand stand out and leave a lasting impact.
                </p>
                <p><strong>{t('about.whyChooseUs.title')}</strong><br />
                  🚀 {t('about.whyChooseUs.items.customSolutions')}<br />
                  🎨 {t('about.whyChooseUs.items.creativity')}<br />
                  💡 {t('about.whyChooseUs.items.resultsDriven')}<br />
                  🤝 {t('about.whyChooseUs.items.priority')}
                </p>
                <p>{t('about.conclusion.p1')}</p>
                <p>📩 {t('about.conclusion.p2')} 🚀</p>
              </div>
              </ScrollAnimatedElement>
            </div>
            <div className="col-md-6">
              <ScrollAnimatedElement animation="scale-up" delay={200}>
                <div className="img-box">
                  <img src="/images/about_logo.png" alt="About Logo" />
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
              <ScrollAnimatedElement animation="fade-up" delay={0}>
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
              </ScrollAnimatedElement>
            </div>
            <div className="col-md-3">
              <div className="info_link_box">
                <h4>{t('home.footer.links.title')}</h4>
                <div className="info_links">
                  <a href="/">{t('nav.home')}</a>
                  <a className="active" href="/about">{t('nav.about')}</a>
                  <a href="/service">{t('nav.services')}</a>
                  <a href="/price">{t('nav.price')}</a>
                  <a href="/portfolio">{t('nav.portfolio')}</a>
                  <a href="/contact">{t('nav.contact')}</a>
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

export default About;
