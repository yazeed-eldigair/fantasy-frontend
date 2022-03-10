import React from "react";
import HomeSection from "../../HomSection/HomeSection";
import {homeData} from './Data';

function Home() {
  return (
    <>
      <HomeSection {...homeData[0]}/>
      <HomeSection {...homeData[1]}/>
      <HomeSection {...homeData[2]}/>
    </>
  );
}

export default Home;
