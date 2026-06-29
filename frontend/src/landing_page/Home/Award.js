import React from 'react';

function Award() {
    return ( 
         <div class='row' style={{marginTop:"100px"}}>
            <div class='col-1'></div>
            <div class='col' style={{ display: 'flex', gap: '200px',marginTop:"100px" }}>
                <div style={{marginTop:"30px"}} >
                  <h2>Trust with confidence </h2>
                  <br/>
                  <h3>Customer-first always</h3>
                  <p>That's wht 13+ crore customers trust Zerodha with ₹3.5+ lakha crores worth of equity investment </p>
                  <br/>
                  <h3>No spam or gimmicks </h3>
                  <p>No gimmicks,spam "gamification",or annoying push notifications .high quality apps that you use at your pece,the way you likw</p>
                  <br/>
                  <h3>The Zerodh universe</h3>
                  <p>Not just an app,but a whole ecosystem.our inverstement in ₹30 fintech startup offer you tailored sevices specific to you need</p>
                  <br/>
                  <h3>Do better with money</h3>
                  <p> with initiatioves like Nudge and kill Switch .We dont just help facililate transactioms but actively help you do better with your money</p>

                  <br/>
                </div>
                <div>
                     <img
          src=" \images\ecosystem.png"
          style={{
            width: "600px",
            height:"600px",
            marginTop: "20px",
           
          }}/> 
                </div>
                </div>
            <div class='col-1'></div>
         </div>
     );
}

export default Award;