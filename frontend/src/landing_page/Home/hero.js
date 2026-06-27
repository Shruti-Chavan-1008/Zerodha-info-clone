import React from "react";

function Hero() {
  return (
    <div class="row">
      <div class="col-2"></div>
      <div class="col justify-content-center p-3">
        <img
          src=" /images/homeHero.png"
          style={{
            width: "950px",
            height:"400px",
            marginTop: "20px",
            marginRight:"20px",
            marginBottom:"20px"
          }}/>
          <h3   style={{ textAlign: 'center' }}>Invest in everything</h3>
          <p style={{ textAlign: 'center' }}> Online platfrom to invest in Stock, Derivation,mutual fund,More</p>
          <button type="button"   class="btn btn-primary"   style={{ display: 'block', margin: '0 auto' }}>SingUp Now</button>
      </div>
      <div class="col-2"></div>
    </div>
  );
}

export default Hero;
