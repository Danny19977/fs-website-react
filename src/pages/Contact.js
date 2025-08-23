import React from 'react';
import FSNavbar from '../components/Navbar';
import '../styles/style.css';
import '../styles/responsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Contact = ({ darkMode, setDarkMode }) => {
  return (
    <div className="hero_area">
  <FSNavbar />
      <section className="contact_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Get In Touch</h2>
          </div>
          <div className="row">
            <div className="col-md-8 col-lg-6 mx-auto">
              <div className="form_container">
                <form id="contact-form">
                  <div><input type="text" name="user_name" placeholder="Your Name" required /></div>
                  <div><input type="email" name="user_email" placeholder="Your Email" required /></div>
                  <div><input type="text" name="user_phone" placeholder="Your Phone" required /></div>
                  <div><input type="text" name="message" className="message-box" placeholder="Message" required /></div>
                  <div className="btn_box "><button type="submit" id="send-button">SEND</button></div>
                </form>
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
                  <a href="/portfolio">Portfolio</a>
                  <a className="active" href="/contact">Contact Us</a>
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

export default Contact;
