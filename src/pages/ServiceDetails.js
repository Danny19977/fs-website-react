import React from 'react';
import { useLocation } from 'react-router-dom';
import FSNavbar from '../components/Navbar';
import '../styles/style.css';
import '../styles/responsive.css';

const serviceData = {
  'Website Creation': {
    title: 'Website Creation',
    icon: 'fa-globe',
    image: '/images/web creation.jpeg',
    content: (
      <>
        <strong>Why Your Business Needs a Website</strong><br />
        In today’s digital world, having a website isn’t just an option—it’s a necessity. Whether you’re a small business owner, an entrepreneur, or someone looking to build a personal brand, your online presence matters more than ever. A well-designed website serves as your digital storefront, a place where customers can find you, learn about your services, and trust your brand. Without one, you risk being invisible in a marketplace where people search online before making any decision. At Freelance Solutions, we help businesses like yours create stunning, high-performing websites that bring in customers and help you grow.<br /><br />
        <strong>Benefits of Having a Website</strong><br />
        <ul>
          <li><strong>Credibility & Professionalism:</strong> A website gives you credibility and makes your business look professional. Even a simple, well-designed website can make a lasting impression, showing customers that you’re serious about what you do.</li>
          <li><strong>24/7 Availability & Customer Engagement:</strong> Unlike a physical store with limited hours, a website works for you 24/7. Your website is always there to provide information, showcase your products, and even take orders.</li>
          <li><strong>Better Customer Reach:</strong> A website breaks all geographical barriers. You’re no longer limited to customers in your local area—people from across the country (or even the world) can find your services.</li>
          <li><strong>Marketing & Growth Opportunities:</strong> Your website is the foundation of all your digital marketing efforts. With search engine optimization (SEO), your website can appear in Google searches, helping more people find you organically.</li>
          <li><strong>E-Commerce & Online Sales:</strong> If you sell products or services, a website allows you to run an online store where customers can browse, shop, and make purchases with ease.</li>
          <li><strong>Showcasing Your Brand Identity:</strong> Your website tells your story—what you stand for, your values, and why customers should choose you over competitors.</li>
        </ul>
        <br />
        <strong>Why Choose Freelance Solutions?</strong><br />
        We craft websites that fit your specific needs, combining creativity, functionality, and strategic planning to deliver websites that not only look amazing but also drive real results.
      </>
    ),
  },
  'Web Redesign': {
    title: 'Website Redesign',
    icon: 'fa-refresh',
    image: '/images/web-redesign.jpeg',
    content: (
      <>
        <strong>Give Your Website a Fresh Start with a Redesign</strong><br />
        Your website is more than just a digital presence—it’s your brand’s first impression. If your website looks outdated, loads slowly, or doesn’t function well on mobile devices, you could be losing potential customers before they even get to know you. At Freelance Solutions, we specialize in website redesigns that transform old, outdated sites into powerful, high-converting platforms.<br /><br />
        <strong>Why You Need a Website Redesign</strong><br />
        <ul>
          <li><strong>First Impressions Matter:</strong> A website redesign ensures that the first impression is professional, engaging, and memorable.</li>
          <li><strong>Mobile-Friendliness is No Longer Optional:</strong> We build websites that look and function perfectly on all devices—mobile, tablet, and desktop.</li>
          <li><strong>Better User Experience = More Conversions:</strong> A redesign ensures that your website is fast, intuitive, and easy to use, leading to higher engagement and more conversions.</li>
          <li><strong>Stay Competitive in Your Industry:</strong> A website redesign helps you stand out and stay ahead of the competition.</li>
          <li><strong>SEO & Performance Boost:</strong> With a redesign, we implement SEO best practices to help you rank higher on Google and attract more visitors.</li>
          <li><strong>Your Brand Deserves the Best Representation:</strong> We ensure that your website truly represents who you are and what you offer.</li>
        </ul>
        <br />
        <strong>Why Work with Freelance Solutions?</strong><br />
        We create a powerful, results-driven digital experience tailored to your business, audience, and goals.
      </>
    ),
  },
  'Graphic Design': {
    title: 'Graphic Design',
    icon: 'fa-paint-brush',
    image: '/images/graphicsdesign.jpg',
    content: (
      <>
        <strong>The Power of Graphic Design: Elevate Your Brand</strong><br />
        In a world where visuals speak louder than words, graphic design is the heart of your brand’s identity. At Freelance Solutions, we specialize in creating eye-catching, professional, and strategic designs that build credibility, attract customers, and make your brand unforgettable.<br /><br />
        <strong>Why Graphic Design Matters</strong><br />
        <ul>
          <li><strong>First Impressions Are Everything:</strong> A well-designed logo, a visually appealing website, and professional branding instantly communicate trust and professionalism.</li>
          <li><strong>Brand Identity & Recognition:</strong> We create designs that leave a lasting impression.</li>
          <li><strong>Increases Customer Engagement & Sales:</strong> Well-crafted designs grab attention, guide users through your content, and encourage action.</li>
          <li><strong>Builds Trust & Professionalism:</strong> A sleek, modern, and cohesive design shows your customers that you are serious about your business.</li>
          <li><strong>Versatility Across All Platforms:</strong> We ensure your designs work seamlessly across all platforms, keeping your brand strong and recognizable.</li>
        </ul>
        <br />
        <strong>What We Offer</strong><br />
        ✔ Custom Logo Design<br />
        ✔ Website Graphics & UI Design<br />
        ✔ Social Media Branding<br />
        ✔ Marketing & Print Materials<br />
        ✔ Full Brand Identity Development<br />
      </>
    ),
  },
  'Systems and Task Automation': {
    title: 'Systems and Task Automation',
    icon: 'fa-cogs',
    image: '/images/systemauto.jpg',
    content: (
      <>
        <strong>Work Smarter, Not Harder: The Power of Systems and Task Automation</strong><br />
        At Freelance Solutions, we help businesses and professionals integrate smart automation into their workflows, eliminating inefficiencies and streamlining operations.<br /><br />
        <strong>Why You Need Systems and Task Automation</strong><br />
        <ul>
          <li><strong>Boost Efficiency & Productivity:</strong> Automation ensures these tasks are done instantly and accurately, without manual effort.</li>
          <li><strong>Eliminate Human Errors:</strong> Automation ensures consistency, accuracy, and reliability.</li>
          <li><strong>Save Time & Reduce Costs:</strong> When routine tasks are automated, you cut down on labor costs, reduce operational delays, and improve overall business efficiency.</li>
          <li><strong>Enhance Customer Experience:</strong> With automation, you can provide instant responses to inquiries, quick order processing, and personalized engagement.</li>
          <li><strong>Scale Your Business with Ease:</strong> Automation allows you to scale operations effortlessly.</li>
        </ul>
        <br />
        <strong>How Freelance Solutions Can Help</strong><br />
        ✔ Website & Workflow Automation<br />
        ✔ CRM & Customer Service Automation<br />
        ✔ Marketing & Social Media Automation<br />
        ✔ E-commerce & Inventory Automation<br />
        ✔ Data Entry & Reporting Automation<br />
      </>
    ),
  },
  'Online Presence': {
    title: 'Online Presence',
    icon: 'fa-globe',
    image: '/images/online.jpeg',
    content: (
      <>
        <strong>Your Online Presence is Your Digital Identity</strong><br />
        At Freelance Solutions, we specialize in building and enhancing online presences that not only look great but also drive results.<br /><br />
        <strong>Why Your Online Presence Matters</strong><br />
        <ul>
          <li><strong>Your Customers Are Online—Are You?</strong> Over 80% of consumers search online before making a purchase or choosing a service.</li>
          <li><strong>Builds Credibility & Trust:</strong> A well-designed website, engaging social media presence, and professional branding tell customers that you are legitimate, trustworthy, and serious about your business.</li>
          <li><strong>24/7 Availability & Customer Engagement:</strong> Your website and social media work for you around the clock.</li>
          <li><strong>Expand Your Reach Beyond Local Customers:</strong> Your online presence allows you to reach customers worldwide.</li>
          <li><strong>Compete with Bigger Brands:</strong> The internet has leveled the playing field.</li>
        </ul>
        <br />
        <strong>How to Increase Your Online Presence</strong><br />
        ✔ Professional Website Development<br />
        ✔ Search Engine Optimization (SEO)<br />
        ✔ Social Media Marketing<br />
        ✔ Content Creation & Blogging<br />
        ✔ Email Marketing & Online Ads<br />
        ✔ Reputation Management & Branding<br />
      </>
    ),
  },
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ServiceDetails = ({ darkMode, setDarkMode }) => {
  const query = useQuery();
  const service = query.get('service');
  const serviceInfo = serviceData[service] || serviceData['Website Creation'];
  // Use darkMode and setDarkMode from props
  React.useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className="hero_area">
      <FSNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container d-flex justify-content-center align-items-center">
        <div className="service-detail card w-100 mb-4" style={{ maxWidth: '1000px', margin: 'auto' }}>
          <div className="card-body">
            <img src={serviceInfo.image} className="card-img-top img-fluid" alt={serviceInfo.title} />
            <br /><br />
            <h4><i className={`fa ${serviceInfo.icon}`} aria-hidden="true"></i> {serviceInfo.title}</h4>
            <div className="card-text">{serviceInfo.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
