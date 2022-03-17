import React from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./HomeSection.css";
import robotSVG from '../../images/robot.svg';
import secureSVG from '../../images/secure.svg';
import setupSVG from '../../images/setup.svg';
import analyticsSVG from '../../images/analytics.svg';

function HomeSection({
  lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart
}) {
  let svg;
  switch (img) {
    case "robot":
      svg = robotSVG;
      break;
    case "secure":
      svg = secureSVG;
      break;
    case "setup":
      svg = setupSVG;
      break;
    case "analytics":
      svg = analyticsSVG;
      break;
  }
  return (
    <>
      <div className={lightBg ? "home-section" : "home-section darkBg"}>
        <div className="container">
          <div className="row home-section-row" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
            <div className="col">
              <div className="home-section-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText?'heading' : 'heading dark'}> {headline} </h1>
                <p className={lightTextDesc ? 'home-section-subtitle' : 'home-section-subtitle dark'}>{description}</p>
                <Link to='/react-website-1/sign-up'>
                    <Button buttonSize="btn--wide" buttonColor='blue'>{buttonLabel}</Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home-section-img-wrapper">
                <img src={svg} alt={alt} className='home-section-img'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  
  );
}

export default HomeSection;
