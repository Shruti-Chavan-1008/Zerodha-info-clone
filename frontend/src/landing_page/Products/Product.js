import React from 'react';
 import Left from './Left';
import Right from './Right';
import Universe from './Universe';
import Hero from './hero';
 
 
function Product() {
    return (
        <>
    
        <Hero/> 
        <Left image_url="\images\kite.png"  product_name="Kite" Product_description="Our ulter-fast flagship trading platform with advanced charts ,an elegant UI ,and more.Enjoy the kite exprerience  seamlessly on your android and iOS device"/>
          <Right image_url="\images\console.png" product_name="Console" product_description="THe central dashboars for your Zerodha account .gain insights into your and invesrment with in- depth reports and visualisations"/>
        <Left image_url="\images\coin.png"  product_name="Coin" Product_description="Buy direct mutual fund online,commission-free,delivered directly to your Demat account .Enjoy the investmeng experience on your Androis ans iOS sevices"/>
        <Right image_url="\images\kiteconnect.png" product_name="Kite Connect API" product_description=" Builds powerful trading platforms and experiences with our super simple HTTP/JOSN APIs .if you are a startup,build your investeneny and showacase it to our clientbase"/>
       <Left image_url="\images\varsity.png"  product_name="Varsity mobile" Product_description="An easy tograsp , collection of syock market  coverage and illustration . Content is help you learn on to thr go."/>
        <Universe/>
        
        </>
      );
}

export default Product;