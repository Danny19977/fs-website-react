import React from 'react';
import FSNavbar from '../components/Navbar';
import '../styles/style.css';
import '../styles/responsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Portfolio = ({ darkMode, setDarkMode }) => {
  return (
    <div className="hero_area">
  <FSNavbar />
      <div className="container-fluid text-center my-3">
        <img src="/images/online-removebg.png" alt="Online Portfolio Banner" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <section className="portfolio_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Portfolio</h2>
            <p>Explore the websites we've developed and designs we've created for our clients.</p>
          </div>
          <div className="row portfolio_items justify-content-center">
            {/* Websites */}
            <div className="col-md-6 col-lg-4 portfolio_item mb-4" data-category="websites">
              <div className="box">
                <div className="img-box" style={{ background: '#f5f7fa', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 10px rgba(3,167,211,0.08)' }}>
                  <video controls style={{ width: '100%', height: 200, objectFit: 'cover' }}>
                    <source src="/video/camus.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="detail-box">
                  <h4>Camus Salru</h4>
                  <p>A sleek and responsive coffee shop website showcasing their menu, locations, and online ordering system.</p>
                  <a href="https://www.camussarlu.com/" className="btn btn-1 mt-2" target="_blank" rel="noopener noreferrer">Visit Site</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 portfolio_item mb-4" data-category="websites">
              <div className="box">
                <div className="img-box" style={{ background: '#f5f7fa', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 10px rgba(3,167,211,0.08)' }}>
                  <video controls style={{ width: '100%', height: 200, objectFit: 'cover' }}>
                    <source src="/video/auther.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="detail-box">
                  <h4>Auther</h4>
                  <p>Helping the author expand their online presence and connect with a broader clientele through a professional and engaging website.</p>
                  <a href="http://matambalukasu.com/" className="btn btn-1 mt-2" target="_blank" rel="noopener noreferrer">Visit Site</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 portfolio_item mb-4" data-category="websites">
              <div className="box">
                <div className="img-box" style={{ background: '#f5f7fa', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 10px rgba(3,167,211,0.08)' }}>
                  <video controls style={{ width: '100%', height: 200, objectFit: 'cover' }}>
                    <source src="/video/youtuber.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="detail-box">
                  <h4>Kabbi Chuad</h4>
                  <p>Website designed for Kabbi Chuad, a popular YouTuber, showcasing their journey, videos, and collaborations.</p>
                  <a href="https://bzp.vch.mybluehost.me/" className="btn btn-1 mt-2" target="_blank" rel="noopener noreferrer">Visit Site</a>
                </div>
              </div>
            </div>
            {/* Graphics */}
            <div className="col-md-6 col-lg-4 portfolio_item mb-4" data-category="graphics">
              <div className="box">
                <div className="img-box" style={{ background: '#f5f7fa', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 10px rgba(3,167,211,0.08)' }}>
                  <img src="/images/productlaunchgraphics.png" alt="Website 1" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                </div>
                <div className="detail-box">
                  <h4>Product Launch Graphics</h4>
                  <p>Marketing materials for a product launch, including banners, flyers, and social media graphics.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 portfolio_item mb-4" data-category="graphics">
              <div className="box">
                <div className="img-box" style={{ background: '#f5f7fa', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 10px rgba(3,167,211,0.08)' }}>
                  <img src="/images/brandingpackage.png" alt="Graphic Design 2" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                </div>
                <div className="detail-box">
                  <h4>Branding Package</h4>
                  <p>Complete branding package for a startup, including logo, business cards, and brand guidelines.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 portfolio_item mb-4" data-category="graphics">
              <div className="box">
                <div className="img-box" style={{ background: '#f5f7fa', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 10px rgba(3,167,211,0.08)' }}>
                  <img src="/images/socialmedia campaign.png" alt="Graphic Design 3" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                </div>
                <div className="detail-box">
                  <h4>Social Media Campaign</h4>
                  <p>Eye-catching graphics for a social media campaign, designed to boost engagement and brand awareness.</p>
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
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href=""><span>South Africa Johannesburg</span></a>
                  <a href="https://wa.me/+27633377293" target="_blank"><span>Call +27 633 377 293</span></a>
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
                  <a href="/price">Specail Pricing</a>
                  <a className="active" href="/portfolio">Portfolio</a>
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

export default Portfolio;
