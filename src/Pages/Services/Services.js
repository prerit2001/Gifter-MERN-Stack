import React from 'react';
import { Footer, InfoSection,Navbar,Pricing } from '../../Components';
import { homeObjFour } from './../HomePage/Data';

const Services = () => {
    return (
        <>
          <Navbar />
          <Pricing />
          <InfoSection {...homeObjFour}/> 
          <Footer />
        </>
    )
}

export default Services
