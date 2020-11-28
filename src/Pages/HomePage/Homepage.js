import React from 'react';
import { Footer, InfoSection,Navbar,Pricing } from '../../Components';
import { homeObjOne,homeObjTwo,homeObjFour } from './Data';

const Homepage = () => {
    return (
        <>
          <Navbar/>
          <InfoSection {...homeObjOne}/>  
          <InfoSection {...homeObjTwo}/> 
          <Pricing />
          <InfoSection {...homeObjFour}/> 
          <Footer />
        </>
    )
}

export default Homepage

