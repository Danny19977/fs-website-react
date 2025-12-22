import React, { useState } from 'react';
import FSNavbar from '../components/Navbar';
import ScrollAnimatedElement from '../components/ScrollAnimatedElement';
import '../styles/style.css';
import '../styles/responsive.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { validateContactForm } from '../utils/formValidation';
import { trackFormSubmission, trackButtonClick } from '../utils/analyticsUtils';

const Contact = ({ darkMode, setDarkMode }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Real-time validation on blur
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });

    // Validate single field
    const validation = validateContactForm({ [name]: formData[name] });
    if (validation.errors[name]) {
      setErrors({ ...errors, [name]: validation.errors[name] });
    } else {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate entire form
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setTouched({
        user_name: true,
        user_email: true,
        user_phone: true,
        message: true,
      });
      return;
    }

    setIsSubmitting(true);
    
    // Track form submission
    trackFormSubmission('contact_form', {
      has_phone: !!formData.user_phone,
      message_length: formData.message.length,
    });
    
    // Track button click
    trackButtonClick('contact_send', 'contact_form');

    try {
      // Save to localStorage
      const submission = {
        user_name: formData.user_name,
        user_email: formData.user_email,
        user_phone: formData.user_phone,
        message: formData.message,
        timestamp: new Date().toISOString(),
      };

      // Get existing submissions
      const existingSubmissions = localStorage.getItem('fs_contact_submissions');
      const submissions = existingSubmissions ? JSON.parse(existingSubmissions) : [];
      
      // Add new submission
      submissions.push(submission);
      localStorage.setItem('fs_contact_submissions', JSON.stringify(submissions));
      
      setSubmitStatus('success');
      setFormData({ user_name: '', user_email: '', user_phone: '', message: '' });
      setErrors({});
      setTouched({});

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputStyle = (fieldName) => {
    if (!touched[fieldName]) return {};
    return errors[fieldName]
      ? { borderColor: '#dc3545', backgroundColor: '#fff5f5' }
      : { borderColor: '#28a745' };
  };

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
                  {submitStatus === 'success' && (
                    <div
                      style={{
                        padding: '15px',
                        marginBottom: '20px',
                        backgroundColor: '#d4edda',
                        color: '#155724',
                        borderRadius: '4px',
                        border: '1px solid #c3e6cb',
                      }}
                      role="alert"
                      aria-live="polite"
                    >
                      ✓ Thank you! Your message has been sent successfully.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div
                      style={{
                        padding: '15px',
                        marginBottom: '20px',
                        backgroundColor: '#f8d7da',
                        color: '#721c24',
                        borderRadius: '4px',
                        border: '1px solid #f5c6cb',
                      }}
                      role="alert"
                      aria-live="polite"
                    >
                      ✗ An error occurred. Please try again.
                    </div>
                  )}
                  <form id="contact-form" onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                      <input
                        type="text"
                        name="user_name"
                        placeholder={t('contact.form.name')}
                        value={formData.user_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={getInputStyle('user_name')}
                        aria-label="Your Name"
                        aria-invalid={!!errors.user_name}
                      />
                      {touched.user_name && errors.user_name && (
                        <small style={{ color: '#dc3545', display: 'block', marginTop: '5px' }}>
                          {errors.user_name}
                        </small>
                      )}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                      <input
                        type="email"
                        name="user_email"
                        placeholder={t('contact.form.email')}
                        value={formData.user_email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={getInputStyle('user_email')}
                        aria-label="Email Address"
                        aria-invalid={!!errors.user_email}
                      />
                      {touched.user_email && errors.user_email && (
                        <small style={{ color: '#dc3545', display: 'block', marginTop: '5px' }}>
                          {errors.user_email}
                        </small>
                      )}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                      <input
                        type="tel"
                        name="user_phone"
                        placeholder={t('contact.form.phone')}
                        value={formData.user_phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={getInputStyle('user_phone')}
                        aria-label="Phone Number"
                        aria-invalid={!!errors.user_phone}
                      />
                      {touched.user_phone && errors.user_phone && (
                        <small style={{ color: '#dc3545', display: 'block', marginTop: '5px' }}>
                          {errors.user_phone}
                        </small>
                      )}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                      <textarea
                        name="message"
                        className="message-box"
                        placeholder={t('contact.form.message')}
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={getInputStyle('message')}
                        aria-label="Message"
                        aria-invalid={!!errors.message}
                        rows="5"
                      />
                      {touched.message && errors.message && (
                        <small style={{ color: '#dc3545', display: 'block', marginTop: '5px' }}>
                          {errors.message}
                        </small>
                      )}
                    </div>
                    <div className="btn_box">
                      <button
                        type="submit"
                        id="send-button"
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                        style={{
                          opacity: isSubmitting ? 0.7 : 1,
                          cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        }}
                      >
                        {isSubmitting ? 'Sending...' : t('contact.form.send')}
                      </button>
                    </div>
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
                  <a href="/" rel="noopener noreferrer"><span>{t('home.footer.address.location')}</span></a>
                  <a href="https://wa.me/+27633377293" target="_blank" rel="noopener noreferrer"><span>{t('home.footer.address.phone')}</span></a>
                  <a href="mailto:info@freelance-solutions.com" rel="noopener noreferrer"><span style={{ fontSize: '0.9em' }}>{t('home.footer.address.email')}</span></a>
                </div>
              </div>
              <div className="info_social">
                <a href="https://www.facebook.com/share/1ByDkVn8fw/" aria-label="Facebook" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.tiktok.com/@freelance.solutio?_t=ZM-8vlpqE3eJrq&_r=1" aria-label="TikTok" rel="noopener noreferrer"><img src="/images/tiktok.png" alt="TikTok" style={{ width: 24, height: 24 }} /></a>
                <a href="https://www.instagram.com/freelance_solu25?igsh=MTdycHYwdnY3ajloaw==" aria-label="Instagram" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
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
          <p>{t('© 2025 All Rights Reserved By FREELANCE SOLUTIONS', { year: new Date().getFullYear() })}</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
