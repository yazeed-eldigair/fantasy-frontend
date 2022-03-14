import React from "react";
import HomeSection from "../../HomSection/HomeSection";
import { homeData } from "./Data";
import Pricing from "../../Pricing/Pricing";

function Services() {
  return (
    <>
      <Pricing /> 
      <HomeSection {...homeData[0]} />
    </>
  );
}

export default Services;
