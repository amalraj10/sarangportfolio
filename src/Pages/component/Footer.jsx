import React from 'react';
import './Footer.css';
import { FaBehance, FaLinkedin, FaMedium, FaInstagram, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Get in touch</h2>
        <h1>Let’s Work Together</h1>
        <p>If you want to hire me, work together, or just say hi, send me a message. I'll reply as soon as I can.</p>
        
        <div className="footer-sections">
          <div className="links">
            <h2>Links</h2>
            <ul>
              <li><a className='mt-3' href="/about">About</a></li>
              <li><a className='mt-3' href="/works">Works</a></li>
              <li><a className='mt-3' href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="social">
            <h2>Social</h2>
            <div className="social-icons">
              <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer">
                <FaBehance />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.medium.com" target="_blank" rel="noopener noreferrer">
                <FaMedium />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a  href="https://www.dribbble.com" target="_blank" rel="noopener noreferrer">
                <FaDribbble />
              </a>
            </div>
          </div>

          <div className="contact-form ms-5">
            <h2 style={{marginTop:"-32%"}} >Chat with me</h2>
            <button className="book-call-button" style={{padding:"10px 35px"}}>Book a call</button>
            <h2 className='mt-5'>Or share more with me</h2>
            <form>
              <input  type="text" name="name" placeholder="Name*" required />
              <input type="email" name="email" placeholder="E-Mail*" required />
              <button className='mt-3'  type="submit">Submit</button>
            </form>
          </div>
        </div>

        <p className="footer-note">Thank you for visiting this website</p>
      </div>
    </footer>
  );
};

export default Footer;
