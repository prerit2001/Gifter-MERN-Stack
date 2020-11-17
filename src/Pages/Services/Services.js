import React from 'react';
import { Footer, InfoSection,Pricing } from '../../Components';
import { homeObjFour } from './../HomePage/Data';

const Services = () => {
    return (
        <>
          <Pricing />
          <InfoSection {...homeObjFour}/> 
          <Footer />
        </>
    )
}

export default Services
