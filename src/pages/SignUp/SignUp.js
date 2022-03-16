import React from "react";
import HomeSection from "../../components/HomSection/HomeSection";
import { Data } from "../../Data/Data";

function SignUp() {
  return (
    <>
      <HomeSection {...Data[2]} />
    </>
  );
}

export default SignUp;
