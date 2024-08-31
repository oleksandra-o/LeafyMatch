import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles.css'; 





const Footer = () => {
  return (
    <footer className="text-center py-4  " >
    
      {/* Social Media Icons */}
      <div className="social-icons mb-3">
        <a href="https://facebook.com" className="mx-2"><i className="bi bi-facebook"></i></a>
        <a href="https://twitter.com" className="mx-2"><i className="bi bi-twitter"></i></a>
        <a href="https://instagram.com" className="mx-2"><i className="bi bi-instagram"></i></a>
        <a href="https://linkedin.com" className="mx-2"><i className="bi bi-linkedin"></i></a>
      </div>
      <p>&copy; Leafy Match - Your Plant Companion. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

