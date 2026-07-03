import React from 'react';

function Universe() {
    return (
       <div className='row'>
        <div className='col-1'></div>
        <div className='col'>
            <div style={{textAlign:"center" ,marginTop:"100px"}}>
                <p>Want to know more about technology stack? check out the Zerodha tec blog</p>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investement even futher with our patner pltfroms</p>
             </div>
            <div style={{display:"flex", height:"70px" ,padding:"6px", marginLeft:"150px",gap:"150px",marginTop:"50px" }}>         
                 <img src='\images\smallcaseLogo.png'/>
                 <img src=' \images\streakLogo.png'/>
                 <img src='\images\sensibullLogo.svg'/>
            </div>
            <div style={{display:"flex", height:"70px" ,padding:"6px", marginLeft:"150px",gap:"150px",marginTop:"50px" }}>
                <img src='\images\zerodhaFundhouse.png'/>
                <img src='\images\goldenpiLogo.png'/>
                <img src='\images\dittoLogo.png'/>
            </div>
            <button type="button"   class="btn btn-primary"   style={{ display: 'block', margin: '0 auto',marginTop:"50px" }}>SingUp Now</button>
        </div>
        <div className='col-1'></div>
       </div>
      );
}

export default Universe;