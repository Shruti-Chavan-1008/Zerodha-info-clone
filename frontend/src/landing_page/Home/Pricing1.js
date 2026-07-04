import React from 'react';
import { Link } from 'react-router-dom';

function Price() {
    return (   
         <div class='row 'style={{ marginTop:"200px" }}>
         <div class='col-2'></div>
         <div class='col' style={{ display: 'flex', gap: '50px'  ,marginTop:"100px"}}>
            <div>
                <h3>Unbetable Pricing</h3>
                  <p> we pioneered the concept of discount broking and price transperency in india , flat fees on hidden charges</p>
                <Link herf="#">See More</Link>
            </div>
            <div style={{ display: 'flex', border: '1px soild black', width:'600px'  }} >
               <div   style={{border: '1px solid black'}}   >
                <h2 style={{ textAlign: 'center', width:"200px" }}>₹0 </h2>
                <p style={{ textAlign: 'center' }}>free equality delivery and direct mutual tools</p>
               </div>
               <div style={{ border: '1px solid black' , width:"250px"}}>
                <h2 style={{ textAlign: 'center' }}>₹20 </h2>
                <p style={{ textAlign: 'center' }}>Interday and F&O</p>
               </div>
            </div>
         </div>
         <div class='col-2'></div>
         </div>
    );
}

export default Price;