import React from 'react';
import FSNavbar from '../components/Navbar';
import '../styles/style.css';
import '../styles/responsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Price = ({ darkMode, setDarkMode }) => {
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
                      <h1>AFFORDIBLE <br />PRICES WEBSITE CREATION</h1>
                      <p>We offer good competitive prices for website creation, tailored to meet your unique needs and budget. Whether you're a startup, a growing business, or an established enterprise, our affordable packages ensure you get the best value for your investment. Let us help you bring your vision to life with stunning designs and seamless functionality.</p>
                      <div className="btn-box">
                        <a href="/contact" className="btn-2">Contact Us</a>
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
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>AFFORDIBLE <br />PRICES WEBSITE REDESIGN</h1>
                      <p>We offer competitive prices for website redesign, tailored to refresh your online presence and meet your evolving needs. Whether you're looking to modernize your design, improve functionality, or enhance user experience, our affordable packages ensure you get the best value for your investment. Let us help you revitalize your vision with stunning designs and seamless functionality.</p>
                      <div className="btn-box">
                        <a href="/contact" className="btn-2">Contact Us</a>
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
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>AFFORDIBLE <br />PRICES GRAPHICS DESIGN</h1>
                      <p>We offer good competitive prices for graphics design, tailored to meet your unique needs and budget. Whether you're a startup, a growing business, or an established enterprise, our affordable packages ensure you get the best value for your investment. Let us help you bring your vision to life with stunning designs and seamless functionality.</p>
                      <div className="btn-box">
                        <a href="/contact" className="btn-2">Contact Us</a>
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
          <div className="heading_container heading_center">
            <h2>Our Specail Pricing</h2>
          </div>
          <div className="price_container">
            <div className="box">
              <div className="detail-box">
                <h2>R <span style={{ textDecoration: 'line-through' }}>5000</span></h2>
                <h2>R <span>3500</span></h2>
                <h6>WEB DESIGN BASIC</h6>
                <ul className="price_features">
                  <li>1 PAGE</li>
                  <li>5 pages or more</li>
                  <li>CONTACT US</li>
                  <li>Free hosting</li>
                  <li>5GB SSD Cloud Storage</li>
                  <li>Free SSL Protection</li>
                  <li>24/7/365 Tech Support</li>
                </ul>
              </div>
              <div className="btn-box">
                <a href="/pdf/Graphics Design Proposal Special prices.pdf" download>See Detail</a>
              </div>
            </div>
            <div className="box">
              <div className="detail-box">
                <h2>R <span style={{ textDecoration: 'line-through' }}>2500</span></h2>
                <h2>R <span>1500</span></h2>
                <h6>WEB REDESIGN</h6>
                <ul className="price_features">
                  <li>BASIC 1 page website</li>
                  <li>5 pages or more</li>
                  <li>CONTACT US</li>
                  <li>5GB SSD Cloud Storage</li>
                  <li>Free SSL Protection</li>
                  <li><br /></li>
                  <li>24/7/365 Tech Support</li>
                </ul>
              </div>
              <div className="btn-box">
                <a href="/pdf/Website Redesign Proposal Special prices.pdf" download>See Detail</a>
              </div>
            </div>
            <div className="box">
              <div className="detail-box">
                <h2>R <span style={{ textDecoration: 'line-through' }}>900</span></h2>
                <h2>R <span>600</span></h2>
                <h6>GRAPHIC DESIGN</h6>
                <ul className="price_features">
                  <li>Standard price</li>
                  <li>Prices may vary depending on the project and design</li>
                  <li>All types of designs</li>
                  <li>CONTACT US</li>
                  <li>TO HELP YOU WITH YOUR DESIGN NEEDS</li>
                  <li>12hours a day Support</li>
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
            <h2>Our Packages</h2>
          </div>
          <div className="price_container">
            <div className="box">
              <div className="detail-box">
                <h2>R <span>7000</span></h2>
                <h6>WEB CREATION PACKAGE</h6>
                <ul className="price_features">
                  <li>2 websites</li>
                  <li>Free hosting and domain for 1 year</li>
                  <li>Peronalized Emails</li>
                  <li>Full Control design process</li>
                  <li>Free SSL Protection</li>
                  <li style={{ fontSize: '10px' }}>price may change depending on the sizes of the websites</li>
                  <li>24/7/365 Tech Support</li>
                </ul>
              </div>
              <div className="btn-box">
                <a href="/pdf/WEB CREATION PACKAGE Proposal for Freelance Solutions.pdf" download>See Detail</a>
              </div>
            </div>
            <div className="box">
              <div className="detail-box">
                <h2>R <span>3000</span></h2>
                <h6>WEB REDESIGN PACKAGE</h6>
                <ul className="price_features">
                  <li>3 Website Redesigns</li>
                  <li>Free hosting and domain for 1 year</li>
                  <li>Increased online visibility(Google)</li>
                  <li>Google Analysis Training(if wanted)</li>
                  <li>Free Marketing</li>
                  <li style={{ fontSize: '10px' }}>price may change depending on the sizes of the websites</li>
                  <li>24/7/365 Tech Support</li>
                </ul>
              </div>
              <div className="btn-box">
                <a href="/pdf/WEB REDESIGN PACKAGE Proposal for Freelance Solutions.pdf" download>See Detail</a>
              </div>
            </div>
            <div className="box">
              <div className="detail-box">
                <h2>R <span>2500</span></h2>
                <h6>GRAPHIC DESIGN</h6>
                <ul className="price_features">
                  <li>5 different designs for anything you need</li>
                  <li>Free consultation for your needs on your designs</li>
                  <li>All types of designs(T-shirts, flyers, posters, etc.)</li>
                  <li>Free Socail media marketing</li>
                  <li>12hours a day Support</li>
                </ul>
              </div>
              <div className="btn-box">
                <a href="/pdf/GRAPHIC DESIGN Proposal.pdf" download>See Detail</a>
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
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href="https://wa.me/+27633377293" target="_blank"><span>South Africa Johannesburg</span></a>
                  <a href="tel:+27633377293"><span>Call +27 633 377 293</span></a>
                  <a href=""><span style={{ fontSize: '0.9em' }}>freelancesolutions46@gmail.com</span></a>
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
                <h4>Links</h4>
                <div className="info_links">
                  <a href="/">Home</a>
                  <a href="/about">About</a>
                  <a href="/service">Services</a>
                  <a className="active" href="/price">Specail Pricing</a>
                  <a href="/portfolio">Portfolio</a>
                  <a href="/contact">Contact Us</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_detail">
                <h4>Info</h4>
                <p>Freelance Solutions crafts impactful online and print presences through expert website development and graphic design. We aim to be the trusted creative hub for all visual and web needs, offering reliable and innovative services. Our skills include building and revamping websites using various technologies and designing diverse graphics to help clients stand out.</p>
              </div>
            </div>
            <div className="col-md-3 mb-0">
              <h4>Subscribe</h4>
              <form className="subscribe-form">
                <input type="text" placeholder="Enter email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="footer_section">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved By <a href="/">FREELANCE SOLUTIONS</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Price;
