import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { MdBusinessCenter } from "react-icons/md";
import { GiDiamonds } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import "./Pricing.css";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div>
        <div className="pricing-section">
          <div className="pricing-wraper">
            <h1 className="pricing-heading">Pricing</h1>
            <div className="pricing-container">
              <Link to="/sign-up" className="pricing-container-card">
                <div className="pricing-container-cardInfo">
                  <div className="icon">
                    <MdBusinessCenter />
                  </div>
                  <h3>Enterprise</h3>
                  <h4>$29.99</h4>
                  <p>per month</p>
                  <ul className="pricing-container-features">
                    <li>2 Licenses</li>
                    <li>5,000 Tokens</li>
                    <li>$10,000 Limit</li>
                  </ul>
                  <Button buttonSize="btn-wide" buttonColor="primary">
                    Choose Plan
                  </Button>
                </div>
              </Link>

              <Link to="/sign-up" className="pricing-container-card">
                <div className="pricing-container-cardInfo">
                  <div className="icon">
                    <GiDiamonds />
                  </div>
                  <h3>Professional</h3>
                  <h4>$49.99</h4>
                  <p>per month</p>
                  <ul className="pricing-container-features">
                    <li>5 Licenses</li>
                    <li>10,000 Tokens</li>
                    <li>$50,000 Limit</li>
                  </ul>
                  <Button buttonSize="btn-wide" buttonColor="blue">
                    Choose Plan
                  </Button>
                </div>
              </Link>

              <Link to="/sign-up" className="pricing-container-card">
                <div className="pricing-container-cardInfo">
                  <div className="icon">
                    <IoDiamond />
                  </div>
                  <h3>Premium</h3>
                  <h4>$99.99</h4>
                  <p>per month</p>
                  <ul className="pricing-container-features">
                    <li>8 Licenses</li>
                    <li>10,000 Tokens</li>
                    <li>No Cash Limit</li>
                  </ul>
                  <Button buttonSize="btn-wide" buttonColor="primary">
                    Choose Plan
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
