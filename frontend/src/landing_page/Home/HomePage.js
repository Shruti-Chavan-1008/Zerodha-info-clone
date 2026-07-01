import React from 'react';
import Hero from './hero';
import Award from './Award';
import Eduction from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
 

function HomePage() {
    return ( 
        <>
   
         <Hero/>
         <Stats/>
         <Award/>
        
         <Pricing/>
         <Eduction/>
         <OpenAccount/>
         
        </>
     );
}

export default HomePage;