import React from 'react';

function Eduction() {
    return (  
        <div class='row' style={{  marginTop:"100px", gap: '50px' }}>
         <div class='col-1'></div>
         <div class='col' style={{ display: 'flex', gap: '100px' }}>
            <div>
                 <img
          src=" /images/education.svg"
          style={{
            width: "500px",
            height:"400px",
            marginTop: "20px",
           
          }}/> 
            </div>
            <div style={{  marginTop:"100px", }}>
              <h3>Free and open market education</h3>
              <p>Varity rhe traget online stock market eduction book in the world covering from the basics to advanced trading</p>
               <a >versity</a>
               <br/>
                <br/>
                  
              <p>TradingQ&A,the most active trading and inverstement commuinty in india for all your market related queries </p> 
                
              <a>TradingQ&A</a>

            </div>
         </div>
         <div class='col-2'></div>

        </div>
    );
}

export default Eduction;