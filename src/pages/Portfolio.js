import React from 'react';
import FSNavbar from '../components/Navbar';
import ScrollAnimatedElement from '../components/ScrollAnimatedElement';
import '../styles/style.css';
import '../styles/responsive.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Portfolio = ({ darkMode, setDarkMode }) => {
  const { t } = useTranslation();

  return (
    <div className="hero_area">
      <FSNavbar />
      <ScrollAnimatedElement animation="fade-up" delay={0}>
        <div className="container-fluid text-center my-3">
          <img src="/images/online-removebg.png" alt={t('portfolio.banner.alt')} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </ScrollAnimatedElement>
      <section className="portfolio_section layout_padding">
        <div className="container">
          <ScrollAnimatedElement animation="fade-up" delay={100}>
            <div className="heading_container heading_center">
              <h2>{t('portfolio.heading')}</h2>
              <p>{t('portfolio.subheading')}</p>
            </div>
          </ScrollAnimatedElement>
          <div className="row portfolio_items justify-content-center">
            {/* Websites */}
            <div className="col-md-6 col-lg-4 portfolio_item mb-4" data-category="websites">
              <ScrollAnimatedElement animation="scale-up" delay={200}>
                <div className="box">
                  <div className="img-box" style={{ background: '#f5f7fa', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 10px rgba(3,167,211,0.08)' }}>
                    <video controls style={{ width: '100%', height: 200, objectFit: 'cover' }}>
                      <source src="/video/camus.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="detail-box">
                    <h4>{t('portfolio.items.camus.title')}</h4>
                    <p>{t('portfolio.items.camus.description')}</p>
                    <a href="https://www.camussarlu.com/" className="btn btn-1 mt-2" target="_blank" rel="noopener noreferrer">{t('portfolio.visitSite')}</a>
                  </div>
                </div>
              </ScrollAnimatedElement>
            </div>
            <div className="col-md-6 col-lg-4 portfolio_item mb-4" data-category="websites">
              <ScrollAnimatedElement animation="scale-up" delay={300}>
                <div className="box">
                  <div className="img-box" style={{ background: '#f5f7fa', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 10px rgba(3,167,211,0.08)' }}>
                    <video controls style={{ width: '100%', height: 200, objectFit: 'cover' }}>
                      <source src="/video/auther.mp4" type="video/mp4" />
                      {t('portfolio.videoNotSupported')}
                    </video>
                  </div>
                  <div className="detail-box">
                    <h4>{t('portfolio.items.auther.title')}</h4>
                    <p>{t('portfolio.items.auther.description')}</p>
                    <a href="http://matambalukasu.com/" className="btn btn-1 mt-2" target="_blank" rel="noopener noreferrer">{t('portfolio.visitSite')}</a>
                  </div>
                </div>
              </ScrollAnimatedElement>
            </div>
            <div className="col-md-6 col-lg-4 portfolio_item mb-4" data-category="websites">
              <div className="box">
                <div className="img-box" style={{ background: '#f5f7fa', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 10px rgba(3,167,211,0.08)' }}>
                  <video controls style={{ width: '100%', height: 200, objectFit: 'cover' }}>
                    <source src="/video/youtuber.mp4" type="video/mp4" />
                    {t('portfolio.videoNotSupported')}
                  </video>
                </div>
                <div className="detail-box">
                  <h4>{t('portfolio.items.kabbi.title')}</h4>
                  <p>{t('portfolio.items.kabbi.description')}</p>
                  <a href="https://bzp.vch.mybluehost.me/" className="btn btn-1 mt-2" target="_blank" rel="noopener noreferrer">{t('portfolio.visitSite')}</a>
                </div>
              </div>
            </div>
            {/* Graphics */}
            <div className="col-md-6 col-lg-4 portfolio_item mb-4" data-category="graphics">
              <div className="box">
                <div className="img-box" style={{ background: '#f5f7fa', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 10px rgba(3,167,211,0.08)' }}>
                  <img src="/images/productlaunchgraphics.png" alt={t('portfolio.items.productLaunch.alt')} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                </div>
                <div className="detail-box">
                  <h4>{t('portfolio.items.productLaunch.title')}</h4>
                  <p>{t('portfolio.items.productLaunch.description')}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 portfolio_item mb-4" data-category="graphics">
              <div className="box">
                <div className="img-box" style={{ background: '#f5f7fa', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 10px rgba(3,167,211,0.08)' }}>
                  <img src="/images/brandingpackage.png" alt={t('portfolio.items.branding.alt')} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                </div>
                <div className="detail-box">
                  <h4>{t('portfolio.items.branding.title')}</h4>
                  <p>{t('portfolio.items.branding.description')}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 portfolio_item mb-4" data-category="graphics">
              <div className="box">
                <div className="img-box" style={{ background: '#f5f7fa', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 10px rgba(3,167,211,0.08)' }}>
                  <img src="/images/socialmedia campaign.png" alt={t('portfolio.items.socialMedia.alt')} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                </div>
                <div className="detail-box">
                  <h4>{t('portfolio.items.socialMedia.title')}</h4>
                  <p>{t('portfolio.items.socialMedia.description')}</p>
                </div>
              </div>
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
                  <a className="active" href="/portfolio">{t('home.footer.links.portfolio')}</a>
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
          <p>{t('home.footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
