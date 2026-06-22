import React from 'react';
import FSNavbar from '../components/Navbar';
import ScrollAnimatedElement from '../components/ScrollAnimatedElement';
import '../styles/style.css';
import '../styles/responsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import PriceDisplay from '../components/PriceDisplay';

const Price = ({ darkMode, setDarkMode }) => {
  const { t } = useTranslation();
  return (
    <div className="hero_area">
      <FSNavbar />
      <section className="slider_section" style={{ backgroundColor: '#0595b9', minHeight: '80vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0', marginTop: '0', position: 'relative' }}>
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container ">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>{t('prices.carousel.webCreation.title')}</h1>
                      <p>{t('prices.carousel.webCreation.description')}</p>
                      <div className="btn-box">
                        <a href="/contact" className="btn-2">{t('common.contactUs')}</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-lg-10 mx-auto">
                        <div className="img-box">
                          <img src="/images/slider-img.png" alt={t('prices.carousel.slider.alt')} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>{t('prices.carousel.webRedesign.title')}</h1>
                      <p>{t('prices.carousel.webRedesign.description')}</p>
                      <div className="btn-box">
                        <a href="/contact" className="btn-2">{t('common.contactUs')}</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-lg-10 mx-auto">
                        <div className="img-box">
                          <img src="/images/slider-img.png" alt={t('prices.carousel.slider.alt')} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>{t('prices.carousel.graphicsDesign.title')}</h1>
                      <p>{t('prices.carousel.graphicsDesign.description')}</p>
                      <div className="btn-box">
                        <a href="/contact" className="btn-2">{t('common.contactUs')}</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-lg-10 mx-auto">
                        <div className="img-box">
                          <img src="/images/slider-img.png" alt="Slider" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_btn-box">
            {/* Carousel controls can be added here if needed */}
          </div>
        </div>
      </section>
      <section className="price_section layout_padding">
        <div className="container">
          <ScrollAnimatedElement animation="fade-up" delay={0}>
            <div className="heading_container heading_center">
              <h2>{t('prices.specialPricing.title')}</h2>
            </div>
          </ScrollAnimatedElement>
          <div className="price_container">
            <ScrollAnimatedElement animation="scale-up" delay={100}>
              <div className="box">
                <div className="detail-box">
                  <h2><span style={{ textDecoration: 'line-through' }}><PriceDisplay amount={5000} /></span></h2>
                  <p className="starting-price-label">{t('prices.startingPrice')}</p>
                  <h2><PriceDisplay amount={3500} /></h2>
                  <h6>{t('prices.webDesignBasic.title')}</h6>
                  <ul className="price_features">
                    <li>{t('prices.webDesignBasic.features.onePage')}</li>
                    <li>{t('prices.webDesignBasic.features.fivePages')}</li>
                    <li>{t('prices.webDesignBasic.features.contactUs')}</li>
                    <li>{t('prices.webDesignBasic.features.freeHosting')}</li>
                    <li>{t('prices.webDesignBasic.features.storage')}</li>
                    <li>{t('prices.webDesignBasic.features.ssl')}</li>
                    <li>{t('prices.webDesignBasic.features.support')}</li>
                  </ul>
                </div>
                <div className="btn-box">
                  <a href="/pdf/Graphics Design Proposal Special prices.pdf" download>See Detail</a>
                </div>
              </div>
            </ScrollAnimatedElement>
            <div className="box">
              <div className="detail-box">
                <h2><span style={{ textDecoration: 'line-through' }}><PriceDisplay amount={2500} /></span></h2>
                <p className="starting-price-label">{t('prices.startingPrice')}</p>
                <h2><PriceDisplay amount={1500} /></h2>
                <h6>{t('prices.webRedesign.title')}</h6>
                <ul className="price_features">
                  <li>{t('prices.webRedesign.features.basicPage')}</li>
                  <li>{t('prices.webRedesign.features.fivePages')}</li>
                  <li>{t('prices.webRedesign.features.contactUs')}</li>
                  <li>{t('prices.webRedesign.features.storage')}</li>
                  <li>{t('prices.webRedesign.features.ssl')}</li>
                  <li><br /></li>
                  <li>{t('prices.webRedesign.features.support')}</li>
                </ul>
              </div>
              <div className="btn-box">
                <a href="/pdf/Website Redesign Proposal Special prices.pdf" download>See Detail</a>
              </div>
            </div>
            <div className="box">
              <div className="detail-box">
                <h2><span style={{ textDecoration: 'line-through' }}><PriceDisplay amount={900} /></span></h2>
                <p className="starting-price-label">{t('prices.startingPrice')}</p>
                <h2><PriceDisplay amount={600} /></h2>
                <h6>{t('prices.graphicDesign.title')}</h6>
                <ul className="price_features">
                  <li>{t('prices.graphicDesign.features.standardPrice')}</li>
                  <li>{t('prices.graphicDesign.features.varyingPrices')}</li>
                  <li>{t('prices.graphicDesign.features.allDesigns')}</li>
                  <li>{t('prices.graphicDesign.features.contactUs')}</li>
                  <li>{t('prices.graphicDesign.features.helpWithNeeds')}</li>
                  <li>{t('prices.graphicDesign.features.support')}</li>
                </ul>
              </div>
              <div className="btn-box">
                <a href="/pdf/Graphics Design Proposal Special prices.pdf" download>See Detail</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="price_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>{t('prices.packages.title')}</h2>
          </div>
          <div className="price_container">
            <div className="box">
              <div className="detail-box">
                <p className="starting-price-label">{t('prices.startingPrice')}</p>
                <h2><PriceDisplay amount={7000} /></h2>
                <h6>{t('prices.webCreationPackage.title')}</h6>
                <ul className="price_features">
                  <li>{t('prices.webCreationPackage.features.twoWebsites')}</li>
                  <li>{t('prices.webCreationPackage.features.freeHosting')}</li>
                  <li>{t('prices.webCreationPackage.features.personalizedEmails')}</li>
                  <li>{t('prices.webCreationPackage.features.fullControl')}</li>
                  <li>{t('prices.webCreationPackage.features.ssl')}</li>
                  <li style={{ fontSize: '10px' }}>{t('prices.webCreationPackage.features.priceNote')}</li>
                  <li>{t('prices.webCreationPackage.features.support')}</li>
                </ul>
              </div>
              <div className="btn-box">
                <a href="/pdf/WEB CREATION PACKAGE Proposal for Freelance Solutions.pdf" download>{t('common.seeDetail')}</a>
              </div>
            </div>
            <div className="box">
              <div className="detail-box">
                <p className="starting-price-label">{t('prices.startingPrice')}</p>
                <h2><PriceDisplay amount={3000} /></h2>
                <h6>{t('prices.webRedesignPackage.title')}</h6>
                <ul className="price_features">
                  <li>{t('prices.webRedesignPackage.features.threeRedesigns')}</li>
                  <li>{t('prices.webRedesignPackage.features.freeHosting')}</li>
                  <li>{t('prices.webRedesignPackage.features.visibility')}</li>
                  <li>{t('prices.webRedesignPackage.features.analytics')}</li>
                  <li>{t('prices.webRedesignPackage.features.marketing')}</li>
                  <li style={{ fontSize: '10px' }}>{t('prices.webRedesignPackage.features.priceNote')}</li>
                  <li>{t('prices.webRedesignPackage.features.support')}</li>
                </ul>
              </div>
              <div className="btn-box">
                <a href="/pdf/WEB REDESIGN PACKAGE Proposal for Freelance Solutions.pdf" download>{t('common.seeDetail')}</a>
              </div>
            </div>
            <div className="box">
              <div className="detail-box">
                <p className="starting-price-label">{t('prices.startingPrice')}</p>
                <h2><PriceDisplay amount={2500} /></h2>
                <h6>{t('prices.graphicDesignPackage.title')}</h6>
                <ul className="price_features">
                  <li>{t('prices.graphicDesignPackage.features.fiveDesigns')}</li>
                  <li>{t('prices.graphicDesignPackage.features.consultation')}</li>
                  <li>{t('prices.graphicDesignPackage.features.allTypes')}</li>
                  <li>{t('prices.graphicDesignPackage.features.marketing')}</li>
                  <li>{t('prices.graphicDesignPackage.features.support')}</li>
                </ul>
              </div>
              <div className="btn-box">
                <a href="/pdf/GRAPHIC DESIGN Proposal.pdf" download>{t('common.seeDetail')}</a>
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
                  <a href="https://wa.me/+27633377293" target="_blank" rel="noopener noreferrer"><span>{t('home.footer.address.location')}</span></a>
                  <a href="tel:+27633377293"><span>{t('home.footer.address.phone')}</span></a>
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
                  <a href="/service">{t('home.footer.links.services')}</a>
                  <a className="active" href="/price">{t('home.footer.links.pricing')}</a>
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

export default Price;
