import React from 'react';
import { Footer, InfoSection, Navbar } from '../../Components';
import { homeObjFour } from './../HomePage/Data';

const Signup = () => {
    return (
        <>
          <Navbar/>
          <InfoSection {...homeObjFour}/> 
          <Footer />
        </>
    )
}

export default Signup
