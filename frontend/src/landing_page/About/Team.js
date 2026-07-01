import React from "react";

function Team() {
  return (
    <div class="row">
           <h1 style={{ textAlign: "center", marginBottom:"20px"}}>People</h1>
      <div class="col-2" style={{ marginLeft: "500px" }}></div>
    
      <div class="col-8" style={{ display: "flex", gap: "150px" }}>
        <div style={{marginLeft:"220px"}}>
          <img
            src="\images\nithinKamath.jpg"
            style={{
              width: "300px",
              height: "300px",
              marginTop: "20px",
              borderRadius: "50%",
            }}
          />
        </div>
        <div class="col-6" style={{marginTop:"50px"}}>   
           <p> Nitain bootstrapped and founded Zerodha in 2010 to overcome the
            hurdies he faced during his decade long stint as a trader. today ,
            Zerodha has changed the landscape of the Indian broking industry .
            <br /> <br />
            He is a member of SEBI ans the Market Data Asvisory Committee (MDAC)
            <br /> <br />
            Playing basketball his zen
          </p>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  );
}

export default Team;
