import React from 'react';
import Hero from './hero';
import Award from './Award';
import Eduction from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
        <Navbar/>
         <Hero/>
         <Award/>
         <Stats/>
         <Pricing/>
         <Eduction/>
         <OpenAccount/>
         <Footer/>
        </>
     );
}

export default HomePage;