import React from 'react';
import Hero from './hero';
import Award from './Award';
import Eduction from './Education';
import Price from './Pricing1';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
 

function HomePage() {
    return ( 
        <>
   
         <Hero/>
         <Stats/>
         <Award/>
        
         < Price/>
         <Eduction/>
         <OpenAccount/>
         
        </>
     );
}

export default HomePage;