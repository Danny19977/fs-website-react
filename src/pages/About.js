import React from 'react';
import FSNavbar from '../components/Navbar';
import '../styles/style.css';
import '../styles/responsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const About = ({ darkMode, setDarkMode }) => {
  return (
    <div className="hero_area">
  <FSNavbar />
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                  <h4>Bringing Your Digital Vision to Life</h4>
                </div>
                <p>At Freelance Solutions, we don’t just build websites or design graphics—we create digital experiences that drive success. Whether you’re a small business, a growing brand, or an individual looking to establish a strong online presence, we bring your ideas to life with creativity, innovation, and precision.</p>
                <p>Our passion lies in helping businesses thrive in today’s fast-moving digital world. From website creation to website redesign, from graphic design to automation solutions, we offer tailored freelance services that help you stand out, attract customers, and streamline your workflow.</p>
                <p><strong>What We Do</strong><br />
                  ✔ Website Creation – Your website is your digital storefront. We design and develop sleek, user-friendly, and high-performing websites that engage visitors and turn them into loyal customers.<br />
                  ✔ Website Redesign – Is your website outdated, slow, or not bringing in results? We revamp and optimize your site to enhance user experience, boost speed, and improve search rankings.<br />
                  ✔ Online Presence – Being online is no longer optional—it’s a necessity. We help businesses build a strong and strategic digital presence through SEO, social media, branding, and content marketing, ensuring you’re always visible and competitive.<br />
                  ✔ Systems and Task Automation – Save time, reduce errors, and focus on what truly matters! We implement smart automation solutions that streamline repetitive tasks, manage workflows, and improve efficiency, so your business runs smoothly 24/7.<br />
                  ✔ Graphic Design – First impressions matter! Whether you need a logo, social media graphics, business cards, or branding materials, we craft stunning visuals that make your brand stand out and leave a lasting impact.
                </p>
                <p><strong>Why Choose Freelance Solutions?</strong><br />
                  🚀 Custom Solutions for Every Business – We tailor every project to your unique needs and goals.<br />
                  🎨 Creativity Meets Functionality – Our work is not just visually stunning but also designed to perform.<br />
                  💡 Results-Driven Approach – We focus on delivering designs and websites that convert visitors into customers.<br />
                  🤝 Your Success is Our Priority – We’re not just a service provider; we’re your digital partners.
                </p>
                <p>Let’s Build Something Amazing Together! Your online presence matters, and at Freelance Solutions, we’re here to help you make a powerful impact. Whether you need a brand-new website, a fresh redesign, or digital solutions that save you time and money, we’re ready to bring your vision to life.</p>
                <p>📩 Let’s talk! Contact us today and take your business to the next level. 🚀</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="/images/about_logo.png" alt="About Logo" />
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
                  <a className="active" href="/about">About</a>
                  <a href="/service">Services</a>
                  <a href="/price">Specail Pricing</a>
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

export default About;
