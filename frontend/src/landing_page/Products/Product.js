import React from 'react';
import Hero from './hero';
import Left from './Left';
import Right from './Right';
import Universe from './Universe';
import Navbar from '../Navbar';

function Product() {
    return (
        <>
        <Navbar/>
        <Hero/>
        <Left/>
        <Right/>
        <Universe/>
        <Footer/>
        </>
      );
}

export default Product;