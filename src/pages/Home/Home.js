import React from "react";
import HomeSection from "../../components/HomSection/HomeSection";
import Pricing from "../../components/Pricing/Pricing";
import { Data } from "../../Data/Data";

function Home() {
  return (
    <>
      <HomeSection {...Data[0]} />
      <HomeSection {...Data[1]} />
      <HomeSection {...Data[2]} />
      <Pricing/>
      <HomeSection {...Data[3]} />
    </>
  );
}

export default Home;
