import React from "react";
import HomeSection from "../../components/HomSection/HomeSection";
import { Data } from "../../Data/Data";
import Pricing from "../../components/Pricing/Pricing";

function Products() {
  return (
    <>
      <Pricing /> 
      <HomeSection {...Data[1]} />
    </>
  );
}

export default Products;
