import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiBlazeFill } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../Button/Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 860) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/react-website-1" className="navbar-logo" onClick={closeMobileMenu}>
            <RiBlazeFill className="navbar-icon" />
            Fantasy
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/react-website-1" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/react-website-1/services" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/react-website-1/products" className="nav-links" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/react-website-1/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline"> SIGN UP </Button>
                </Link>
              ) : (
                <Link to="/react-website-1/sign-up" className="btn-link" onClick={closeMobileMenu}>
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    {" "}
                    SIGN UP{" "}
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
