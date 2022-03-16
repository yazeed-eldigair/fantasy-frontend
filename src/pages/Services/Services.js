import React from "react";
import HomeSection from "../../components/HomSection/HomeSection";
import { Data } from "../../Data/Data";
import Pricing from "../../components/Pricing/Pricing";

function Services() {
  return (
    <>
      <Pricing /> 
      <HomeSection {...Data[0]} />
    </>
  );
}

export default Services;
