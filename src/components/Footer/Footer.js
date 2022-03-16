import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { RiBlazeFill } from "react-icons/ri";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Stay up to date with our latest products and deals!
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time
        </p>
        <div className="input-areas">
          <form action="">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">Carees</Link>
            <Link to="/">Our Philanthropy</Link>
            <Link to="/">Our Partners</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Help</h2>
            <Link to="/">Contact Us</Link>
            <Link to="/">Support</Link>
            <Link to="/">FAQs</Link>
            <Link to="/">Live Chat</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Services</h2>
            <Link to="/">Advertise</Link>
            <Link to="/">Sell your Products</Link>
            <Link to="/">Become an Affiliate</Link>
            <Link to="/">Submit Video</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Twitter</Link>
            <Link to="/">LinkedIn</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Instagram</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <RiBlazeFill/> Fantasy
            </Link>
          </div>
          <small className="website-rights">FTSY © 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
