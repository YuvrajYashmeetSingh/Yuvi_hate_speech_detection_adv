import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" text-black text-center text-lg-center fixed-bottom" style={{ backgroundColor:"antiquewhite"}}>
      <div className="container">
        <p className="mb-1">© {currentYear} YuVi</p>
        <p className="mb-1">Email: <a href="mailto:yuvibadal@gmail.com" className="text-black">yuvi@company.com</a></p>
        <div className="social-icons d-flex justify-content-center">
          <a href="https://www.instagram.com/yuvraj_singh064/" target="_blank" rel="noopener noreferrer" className="text-black mx-3">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/yuvraj-yashmeet-singh-a81893209/" target="_blank" rel="noopener noreferrer" className="text-black mx-3">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/YuvrajYashmeetSingh" target="_blank" rel="noopener noreferrer" className="text-black mx-3">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
