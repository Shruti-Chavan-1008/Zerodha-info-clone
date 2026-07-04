import React from 'react';

function Hero() {
    return ( 
       <div className='row'>
            <div className='col-1'></div>
             <div className='col'>
                <div style={{ textAlign: "center",marginTop:"60px"}}>
                    <h1>Pricing</h1>
                    <p style={{marginBottom:"60px"}}>Free equity investement and flat ₹20 traday and F&O trads </p>
                     <hr/>
                </div>
                <div style={{display:"flex",gap:"100px" ,textAlign:"center",marginTop:"100px"}}>
                    <div >
                      <img src='\images\pricingEquity.svg' style={{height:"150px"}}/>
                      <h4>Free equity delivery</h4>
                      <p>All quality delivery investement (NSE,BES),are absolutely free - ₹0 brokerage</p>
                      
                    </div>
                    <div   >
                         <img src='\images\intradayTrades.svg' style={{height:"150px"}}/>
                      <h4>Interaday and F&O trades</h4>
                      <p> flat Rs.20 or 0.03%(Whichever is lower ) per excuted order on interday trads across equlity currency ,and commodity trads.</p>
                    </div>
                    <div>
                       <img src='\images\pricingEquity.svg' style={{height:"150px"}}/>
                      <h4> Free direct MF</h4>
                      <p> All direct fund investement are absolutely free -₹ no charges</p>
                    </div>
                </div>
             </div>
              <div className='col-1'></div>
         </div>
     );
}

export default Hero;