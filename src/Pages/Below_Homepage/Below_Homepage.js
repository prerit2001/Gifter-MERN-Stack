import React from 'react';
import { Footer, InfoSection,Pricing } from '../../Components';
import { homeObjTwo,homeObjFour } from './../HomePage/Data';

const Below_Homepage = () => {
    return (
        <>
          <InfoSection {...homeObjTwo}/> 
          <Pricing />
          <InfoSection {...homeObjFour}/> 
          <Footer />
        </>
    )
}

export default Below_Homepage;
