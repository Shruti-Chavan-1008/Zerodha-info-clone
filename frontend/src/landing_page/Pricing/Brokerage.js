import React from 'react';

function Brokerage() {
    return ( 
           <div className='row'>
             <div className='col-1'></div>
             
              <div className='col' style={{display:"flex",marginTop:"100px",padding:"10px"}}>
                   
                 <div>
                    <hr/>
                    <h4 style={{textAlign:"center",color:"#000080" ,marginBottom:"20px"}}>Brokerage calculator</h4>
                    <ul >
                        <li>Call & Trade and RMS auto-squaroff Additional charges of 50+ GST per order.</li>  <br/>
                        <li>Digital contract notes will be sent voi e-mail</li><br/>
                        <li>Physical copies of contracte note ,if required shall be charged 20 per contract note .Courier charges apply.</li> <br/>
                        
                        <li>For NRI account (non-PIS) o.5% or 100 per exectuted order for equilaty </li><br/>
                        <li>For NRI account (PIS) 0.5% or 200 per exectuted order for equaity </li><br/>
                        <li>if the account is debit balance ,any order will be charged 40 per excecuted order</li><br/>
                    </ul>
                 </div>
                  <div>
                     <hr/>
                     <h4 style={{color:"#000080",textAlign:"center",marginLeft:"200px"}}>List of charge</h4>
                  </div>
              </div>
               <div className='col-1'></div>
           </div>
     );
}

export default Brokerage;