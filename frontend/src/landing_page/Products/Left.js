import React from "react";
import { Link } from "react-router-dom";

function Left({ image_url, product_name, Product_description }) {
  return (
    <div className="row">
      <div className="col-1"></div>
      <div
        className="col"
        style={{ display: "flex", gap: "200px", marginTop: "100px" }}
      >
        <div>
          <img src= {image_url} 
          style={{
            width: "500px",
            height:"400px",
            marginTop: "20px",
           
          }}/>
        </div>
        <div style={{marginTop:"80px", padding:'10px'}}>
          <h3>{product_name}</h3>
          <p>{Product_description}</p>
        
          <Link style={{ padding:"5px", marginBottom:"10px" ,marginRight:"110px"}}>Try demo</Link>

          <Link>learn More</Link>
          <br />

          <img src="\images\googlePlayBadge.svg" style={{padding:"10px", marginTop:"10px"}} />
          <img src="\images\appstoreBadge.svg" style={{padding:"10px", marginTop:"10px"}}  />
        
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  );
}

export default Left;
