import React from 'react';
function Stats() {
    return ( 
        <diV class='row'style={{marginTop:"50px"}}>
            <div class='col-2'></div>
            <div class='col' style={{ display: 'flex', gap: '100px'  ,marginTop:"100px"}}>
                <diV>
                      <img
          src="\images\largestBroker.svg"
          style={{
            width: "400px",
            height:"400px",
            marginTop: "20px",
           
          }}/> 
                </diV>
                <diV style={{ marginTop:"100px", gap: '5px'}}>
                    <h3>Largest stock Broker in india</h3>
                    <p>2+ million Zerodha clients contributes to over 15% of all retail order volumes india daliy by trading and investing in:</p>
                    <div style={{ display: 'flex', gap: '5px'}}> 
                    <ul>
                       <li>Future and Option</li>
                       <li>Commedity derivation</li>
                       <li>Currency derivatives</li>
                    </ul>
                    <ul>
                       <li>Stocks & IPOs</li>
                       <li>Direct mutual  funds</li>
                       <li>Bonds and Govt. Securities</li>
                    </ul>
                    </div>
                     <img
          src="\images\pressLogos.png"
          style={{
            width: "500px",
            height:"50px",
            marginTop: "10px",
           
          }}/> 
                </diV>

            </div>
            
            <div class='col-2'></div>
        </diV>  
     );
}

export default Stats;