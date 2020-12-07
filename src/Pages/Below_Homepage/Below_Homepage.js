import React from "react";
import { Footer, InfoSection, Navbar, Pricing } from "../../Components";
import { homeObjTwo, homeObjFour } from "./../HomePage/Data";

const Below_Homepage = () => {
  return (
    <>
      <Navbar />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} />
      <Footer />
    </>
  );
};

export default Below_Homepage;
