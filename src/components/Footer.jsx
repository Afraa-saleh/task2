import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-about">
          <div className="logo-section">
            <img className= 'logo'src="./public/logo.png" alt="" />
          </div>
          <p>
            We believe in the power of play to foster creativity, <br />
            problem-solving skills, and imagination.
          </p>
          <div className="contact-item">
          <div className="icon-content">
            <FaEnvelope className="icon" />
            </div>
            <span>hello@littlelearners.com</span>
          </div>
          <div className="contact-item">
            <div className="icon-content">
             <FaPhone className="icon" />

            </div>
            <span>+91 91813 23 2309</span>
          </div>
          <div className="contact-item">
          <div className="icon-content">
            <FaMapMarkerAlt className="icon" />
            </div>
            <span>Somewhere in the World</span>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h3>Home</h3>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Our Testimonials</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3>About Us</h3>
            <ul>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">Our Vision</a></li>
              <li><a href="#">Awards and Recognitions</a></li>
              <li><a href="#">History</a></li>
              <li><a href="#">Teachers</a></li>
            </ul>
          </div>
          <div>
            <h3>Academics</h3>
            <ul>
              <li><a href="#">Special Features</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <ul>
              <li><a href="#">Information</a></li>
              <li><a href="#">Map & Direction</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="policy-links">
          Terms of Service | Privacy Policy | Cookie Policy
        </div>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>

      </div>
        <div className='Copyright'>Copyright © [2023] Little Learners Academy. All rights reserved.</div>
    </footer>
  );
}



