import React from 'react';
import { InfoSection } from '../../Components';
import { homeObjOne } from './Data';

const Homepage = () => {
    return (
        <>
          <InfoSection {...homeObjOne}/>  
        </>
    )
}

export default Homepage
