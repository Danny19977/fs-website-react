import React from 'react';
import FSNavbar from '../components/Navbar';
import '../styles/style.css';
import '../styles/responsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Service = ({ darkMode, setDarkMode }) => {
  return (
    <div className="hero_area">
  <FSNavbar />
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Services</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src="/images/service_icon (1).png" alt="Website Development" />
                </div>
                <div className="detail-box">
                  <h4>Website Development</h4>
                  <p>Freelance Solutions offers top-notch website development services tailored to meet your unique needs. Our team of experts ensures that your website is not only visually appealing but also highly functional and optimized for performance. By choosing Freelance Solutions, you gain access to innovative designs, cutting-edge technologies, and a commitment to delivering exceptional results that help your business thrive in the digital world.</p>
                  <a href="https://wa.me/+27633377293" target="_blank" rel="noopener noreferrer">Contact Us</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src="/images/service_icon (2).png" alt="Website Redesign" />
                </div>
                <div className="detail-box">
                  <h4>Website Redesign</h4>
                  <p>Freelance Solutions specializes in website redesign services that breathe new life into your online presence. Our team of skilled designers and developers work closely with you to understand your vision and goals, ensuring that the redesigned website not only looks stunning but also enhances user experience and functionality. With our expertise, we transform outdated websites into modern, responsive, and visually appealing platforms that captivate your audience and drive results.</p>
                  <a href="https://wa.me/+27633377293" target="_blank" rel="noopener noreferrer">Contact Us</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src="/images/service_icon (3).png" alt="Graphic Design" />
                </div>
                <div className="detail-box">
                  <h4>Graphic Design</h4>
                  <p>Freelance Solutions offers exceptional graphic design services that elevate your brand's visual identity. Our talented designers create stunning graphics, logos, and marketing materials tailored to your specific needs. With a focus on creativity and innovation, we ensure that your designs not only capture attention but also effectively communicate your message. Trust Freelance Solutions to bring your ideas to life with captivating visuals that leave a lasting impression.</p>
                  <a href="https://wa.me/+27633377293" target="_blank" rel="noopener noreferrer">Contact Us</a>
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
                  <a className="active" href="/service">Services</a>
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

export default Service;
