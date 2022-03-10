import React from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./HomeSection.css";

function HomeSection({
  lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart
}) {
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
                <Link to='/sign-up'>
                    <Button buttonSize="btn--wide" buttonColor='blue'>{buttonLabel}</Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home-section-img-wrapper">
                <img src={img} alt={alt} className='home-section-img'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  
  );
}

export default HomeSection;
