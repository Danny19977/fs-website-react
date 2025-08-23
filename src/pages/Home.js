import React, { useState } from 'react';
import FSNavbar from '../components/Navbar';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAngleLeft, faAngleRight, faQuoteLeft, faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import '../styles/style.css';
import '../styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Inject confetti effect for Contact Us button
if (typeof window !== 'undefined' && !window.confettiEffect) {
  window.confettiEffect = function () {
    for (let i = 0; i < 18; i++) {
      const conf = document.createElement('div');
      conf.style.position = 'fixed';
      conf.style.top = (60 + Math.random() * 40) + 'px';
      conf.style.left = (window.innerWidth/2 + (Math.random()-0.5)*180) + 'px';
      conf.style.width = '10px';
      conf.style.height = '10px';
      conf.style.borderRadius = '50%';
      conf.style.background = `hsl(${Math.random()*360},90%,60%)`;
      conf.style.zIndex = 9999;
      conf.style.opacity = 0.85;
      conf.style.pointerEvents = 'none';
      conf.style.animation = 'confetti-fall 1.2s cubic-bezier(.23,1.02,.64,1) forwards';
      document.body.appendChild(conf);
      setTimeout(() => { conf.remove(); }, 1200);
    }
  }
}

const Home = ({ darkMode, setDarkMode }) => {
  const [showThankYou, setShowThankYou] = useState(false);
  const handleSubscribe = (e) => {
    e.preventDefault();
    setShowThankYou(true);
  };

  return (
    <div className="hero_area">
      {/* Header Section */}
  <FSNavbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Slider Section - React Bootstrap Carousel */}
      <section className="slider_section" style={{ minHeight: '80vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0595b9', marginBottom: '0', marginTop: '0', position: 'relative' }}>
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
          <Carousel interval={2000} fade
            nextIcon={<span className="carousel-control-next-icon" style={{ filter: 'invert(40%)', fontSize: '2.5rem' }}><FontAwesomeIcon icon={faAngleRight} /></span>}
            prevIcon={<span className="carousel-control-prev-icon" style={{ filter: 'invert(40%)', fontSize: '2.5rem' }}><FontAwesomeIcon icon={faAngleLeft} /></span>}
          >
            <Carousel.Item>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', color: '#fff', background: 'none' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                  <h1 style={{ fontWeight: 'bold', marginBottom: '25px', fontSize: '2.5rem' }}>WELCOME TO<br />FREELANCE SOLUTIONS</h1>
                  <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>We deliver exceptional web development and comprehensive design solutions. Let us help you create a stunning online presence that stands out from the competition.</p>
                  <div className="btn-box" style={{ display: 'flex', justifyContent: 'center' }}>
                    <a href="/service" className="about-btn btn-blue-1" style={{marginRight:'18px'}}>
                      Read More
                    </a>
                    <a href="/contact" className="about-btn btn-blue-2" onClick={() => {window.confettiEffect && window.confettiEffect();}}>
                      Contact Us
                    </a>
                  </div>
                </div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/images/new_logo-removebg-preview.png" alt="Logo" style={{ maxWidth: '400px', width: '100%' }} />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', color: '#fff', background: 'none' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                  <h1 style={{ fontWeight: 'bold', marginBottom: '25px', fontSize: '2.5rem' }}>Web design,<br />Graphic Design &<br />Automate Workflow</h1>
                  <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Elevate your brand's digital presence with our comprehensive suite of services. We specialize in crafting visually stunning and user-friendly websites, designing impactful graphics that resonate, and streamlining your operations through intelligent workflow automation. Let us transform your ideas into powerful, efficient, and engaging experiences that drive results.</p>
                  <div className="btn-box" style={{ display: 'flex', justifyContent: 'center' }}>
                    <a href="/service" className="about-btn btn-blue-1" style={{marginRight:'18px'}}>
                      Read More
                    </a>
                    <a href="/contact" className="about-btn btn-blue-2" onClick={() => {window.confettiEffect && window.confettiEffect();}}>
                      Contact Us
                    </a>
                  </div>
                </div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/images/slider-img.png" alt="Slider" style={{ maxWidth: '400px', width: '100%' }} />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', color: '#fff', background: 'none' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                  <h1 style={{ fontWeight: 'bold', marginBottom: '25px', fontSize: '2.5rem' }}>Your Digital Ecosystem<br />Designed & Automated</h1>
                  <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Imagine your online presence as a thriving ecosystem – seamlessly connected, beautifully designed, and effortlessly efficient. We craft that reality, blending captivating web and graphic design with intelligent automation to create a digital world where your brand flourishes.</p>
                  <div className="btn-box" style={{ display: 'flex', justifyContent: 'center' }}>
                    <a href="/service" className="about-btn btn-blue-1" style={{marginRight:'18px'}}>
                      Read More
                    </a>
                    <a href="/contact" className="about-btn btn-blue-2" onClick={() => {window.confettiEffect && window.confettiEffect();}}>
                      Contact Us
                    </a>
                  </div>
                </div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/images/slider-img2.png" alt="Slider2" style={{ maxWidth: '400px', width: '100%' }} />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      {/* Service Section */}
      <div style={{ background: '#fff', width: '100vw', margin: '0', padding: '0' }}>
        <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h1>Our Services</h1>
            <h4>How we can help you succeed</h4>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src="/images/s1.svg" alt="Website Creation" />
                </div>
                <div className="detail-box">
                  <h4>Website Creation</h4>
                  <p>Your Online Presence Starts Here. Let us help you create a stunning website that stands out from the rest.</p>
                  <a href="/service-details?service=Website%20Creation" className="btn-1">Read More <FontAwesomeIcon icon={faAngleRight} /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src="/images/s2.svg" alt="Web Redesign" />
                </div>
                <div className="detail-box">
                  <h4>Web Redesign</h4>
                  <p>Is Your Website Working for You? Let us help you redesign your website for maximum impact and performance.</p>
                  <a href="/service-details?service=Web%20Redesign" className="btn-1">Read More <FontAwesomeIcon icon={faAngleRight} /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src="/images/s3.svg" alt="Graphic Design" />
                </div>
                <div className="detail-box">
                  <h4>Graphic Design</h4>
                  <p>Make Your Brand Unforgettable: Professional Graphic Design. Let us help you create stunning visuals that captivate your audience.</p>
                  <a href="/service-details?service=Graphic%20Design" className="btn-1">Read More <FontAwesomeIcon icon={faAngleRight} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>

      {/* About Section */}
      <section className="about_section layout_padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>At Freelance Solutions, we are passionate about delivering top-notch freelance services tailored to your needs. Specializing in quality web development and creative graphic design, we bring your ideas to life with clean, modern, and user-friendly designs. Whether it’s building a stunning website or crafting visually compelling graphics, we’re dedicated to helping your brand stand out and succeed in the digital world. Let’s create something amazing together!</p>
                <a href="/about">Read More</a>
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

      {/* Server Section (Video) */}
      <section className="server_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="video-box" style={{ position: 'relative', display: 'inline-block' }}>
                <video style={{ width: '100%', height: 'auto' }} controls>
                  <source src="/video/fs.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Let Freelance Solutions bring your business to the future</h2>
                  <p>At Freelance Solutions, we’re here to bring your business into the future. we create digital experiences that not only looks great but also drive growth and engagement. Let us help you stay ahead of the curve and transform your vision into a modern, future-ready reality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="price_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Prices</h2>
          </div>
          <div className="price_container">
            <div className="box">
              <div className="detail-box">
                <h2>R <span>5000</span></h2>
                <h6>WEB DESIGN BASIC</h6>
                <ul className="price_features">
                  <li>1 PAGE</li>
                  <li>5 pages or more</li>
                  <li>CONTACT US</li>
                  <li>Free hosting</li>
                  <li>5GB SSD Cloud Storage</li>
                  <li>Free SSL Protection</li>
                  <li>24/7/365 Tech Support</li>
                  <li style={{ fontSize: '10px' }}>E-commerce website pricing varies and will be determined upon consultation.</li>
                </ul>
              </div>
              <div className="btn-box">
                <a href="/pdf/Website-Design-Proposal.pdf" download>See Detail</a>
              </div>
            </div>
            <div className="box">
              <div className="detail-box">
                <h2>R <span>2500</span></h2>
                <h6>WEB REDESIGN</h6>
                <ul className="price_features">
                  <li>BASIC 1 page website</li>
                  <li>5 pages or more</li>
                  <li>CONTACT US</li>
                  <li>5GB SSD Cloud Storage</li>
                  <li>Free SSL Protection</li>
                  <li>24/7/365 Tech Support</li>
                  <li><br /></li>
                </ul>
              </div>
              <div className="btn-box">
                <a href="/pdf/WEB REDESIGN Proposal.pdf" download>See Detail</a>
              </div>
            </div>
            <div className="box">
              <div className="detail-box">
                <h2>R <span>900</span></h2>
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
                <a href="/pdf/GRAPHIC DESIGN Proposal.pdf" download>See Detail</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Section (Testimonials) */}
      <section className="client_section">
        <div className="container">
          <div className="heading_container heading_center">
            <h2 style={{ textAlign: 'center' }}>Testimonial</h2>
            <p style={{ textAlign: 'center' }}>Even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to</p>
          </div>
        </div>
        <div className="container px-0">
          <TestimonialCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact_section layout_padding-bottom">
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
                  <a href=""><FontAwesomeIcon icon={faMapMarker} /> <span>South Africa, Gauteng</span></a>
                  <a href="https://wa.me/+27633377293" target="_blank"><FontAwesomeIcon icon={faPhone} /> <span>Call +27 633 377 293</span></a>
                  <a href=""><FontAwesomeIcon icon={faEnvelope} /> <span style={{ fontSize: '0.9em' }}>freelancesolutions46@gmail.com</span></a>
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
                  <a className="active" href="/"><img src="/images/nav-bullet.png" alt="" /> Home</a>
                  <a href="/about"><img src="/images/nav-bullet.png" alt="" /> About</a>
                  <a href="/service"><img src="/images/nav-bullet.png" alt="" /> Services</a>
                  <a href="/price"><img src="/images/nav-bullet.png" alt="" /> Specail Pricing</a>
                  <a href="/portfolio"><img src="/images/nav-bullet.png" alt="" /> Portfolio</a>
                  <a href="/contact"><img src="/images/nav-bullet.png" alt="" /> Contact Us</a>
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
              <form onSubmit={handleSubscribe} className="subscribe-form">
                <input type="text" placeholder="Enter email" required />
                <button type="submit">Subscribe</button>
              </form>
              {showThankYou && (
                <div className="thank-you-modal" style={{ background: '#007bff', color: '#fff', padding: '32px 24px 24px 24px', borderRadius: '12px', maxWidth: '350px', width: '90vw', boxShadow: '0 4px 24px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
                  <h4 style={{ marginBottom: '16px' }}>Thank you for subscribing!</h4>
                  <button onClick={() => setShowThankYou(false)} style={{ marginTop: '24px', background: '#fff', color: '#007bff', border: 'none', padding: '10px 32px', borderRadius: '24px', fontWeight: 600, cursor: 'pointer' }}>Close</button>
                </div>
              )}
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

// TestimonialArrows component for controlling the testimonial carousel
function TestimonialArrows() {
  const event = new CustomEvent('testimonial-arrow', { detail: null });
  return (
    <div id="testimonial-arrows-control" style={{ display: 'flex', gap: '8px' }}>
      <button className="carousel-control-prev blue-arrow" onClick={() => window.dispatchEvent(new CustomEvent('testimonial-arrow', { detail: 'prev' }))} aria-label="Previous">
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button className="carousel-control-next blue-arrow" onClick={() => window.dispatchEvent(new CustomEvent('testimonial-arrow', { detail: 'next' }))} aria-label="Next">
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}

// TestimonialCarousel component for client testimonials
function TestimonialCarousel({ arrowsId }) {
  const testimonials = [
    {
      name: 'Sisbusiso',
      role: 'Customer',
      text: '"Our old website was outdated and clunky, and we knew it was hurting our business. Freelance Solutions came in and completely revitalized it! They updated the design, streamlined the navigation, and significantly improved the site\'s speed. It now looks modern, professional, and is so much easier for our customers to use. The team was a pleasure to work with and truly understood our needs. A fantastic transformation!"'
    },
    {
      name: 'Thando',
      role: 'Customer',
      text: '"Freelance Solutions has been instrumental in building our brand identity. They designed a logo that perfectly captures our company\'s essence and have consistently delivered stunning marketing materials, from brochures to social media graphics. Their creativity is exceptional, and they always manage to create visuals that grab attention and communicate our message effectively. They are our go-to for all things design!"'
    },
    {
      name: 'Buhle',
      role: 'Customer',
      text: '"Absolutely thrilled with the website Freelance Solutions built for my new business! They took my vague ideas and transformed them into a professional, easy-to-navigate site that looks fantastic on any device. Their technical skills are clearly top-notch, and they even integrated some cool interactive features I didn\'t think were possible. It\'s exactly what I needed to establish a strong online presence. Highly recommend!"'
    },
    {
      name: 'Nomsa',
      role: 'Customer',
      text: '"The team at Freelance Solutions exceeded my expectations! They were responsive, creative, and delivered my project ahead of schedule. The new website has already brought in more clients. I couldn\'t be happier!"'
    },
    {
      name: 'Lebo',
      role: 'Customer',
      text: '"From branding to web development, Freelance Solutions is the best partner we\'ve worked with. Their attention to detail and customer service is unmatched. Highly recommended!"'
    },
    {
      name: 'Zanele',
      role: 'Customer',
      text: '"I loved the creative process with Freelance Solutions. They listened to my ideas and brought them to life. The results speak for themselves!"'
    }
  ];
  const [activeIndex, setActiveIndex] = React.useState(0);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((activeIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeIndex, testimonials.length]);
  React.useEffect(() => {
    function handleArrow(e) {
      if (e.detail === 'prev') {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      } else if (e.detail === 'next') {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }
    }
    window.addEventListener('testimonial-arrow', handleArrow);
    return () => window.removeEventListener('testimonial-arrow', handleArrow);
  }, [testimonials.length]);
  return (
    <div className="testimonial-carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="box">
                  <div className="detail-box">
                    <div className="client_info">
                      <div className="client_name">
                        <h5>{testimonials[activeIndex].name}</h5>
                        <h6>{testimonials[activeIndex].role}</h6>
                      </div>
                      <FontAwesomeIcon icon={faQuoteLeft} />
                    </div>
                    <p>{testimonials[activeIndex].text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
