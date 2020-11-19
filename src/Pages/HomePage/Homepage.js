import React from 'react';
import { Footer, InfoSection,Pricing } from '../../Components';
import { homeObjOne,homeObjTwo,homeObjFour } from './Data';

const Homepage = () => {
    return (
        <>
          <InfoSection {...homeObjOne}/>  
          <InfoSection {...homeObjTwo}/> 
          <Pricing />
          <InfoSection {...homeObjFour}/> 
          <Footer />
        </>
    )
}

export default Homepage

