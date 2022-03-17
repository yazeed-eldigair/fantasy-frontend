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
            <Link to="/react-website-1">Carees</Link>
            <Link to="/react-website-1">Our Philanthropy</Link>
            <Link to="/react-website-1">Our Partners</Link>
            <Link to="/react-website-1">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Help</h2>
            <Link to="/react-website-1">Contact Us</Link>
            <Link to="/react-website-1">Support</Link>
            <Link to="/react-website-1">FAQs</Link>
            <Link to="/react-website-1">Live Chat</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Services</h2>
            <Link to="/react-website-1">Advertise</Link>
            <Link to="/react-website-1">Sell your Products</Link>
            <Link to="/react-website-1">Become an Affiliate</Link>
            <Link to="/react-website-1">Submit Video</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/react-website-1">Twitter</Link>
            <Link to="/react-website-1">LinkedIn</Link>
            <Link to="/react-website-1">Facebook</Link>
            <Link to="/react-website-1">Instagram</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/react-website-1" className="social-logo">
              <RiBlazeFill/> Fantasy
            </Link>
          </div>
          <small className="website-rights">FTSY © 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="/react-website-1"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="/react-website-1"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to="/react-website-1"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to="/react-website-1"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to="/react-website-1"
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
