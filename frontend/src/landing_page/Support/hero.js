import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
     <div className="row" style={{backgroundColor:"#425df4",color:"white"}}>
        <div className="col-1"></div>
         
         <div className="col"  >
            <div style={{marginBottom:"50px", marginTop:"20px"}} > 
         <h4  >Support Portal</h4>
         <Link style={{color:"white",marginLeft:"1000px"}}>Track tickect</Link>
         </div>
         <div style={{display:"flex",gap:"200px",marginBottom:"100px"}}> 
          <div >
            <h4>
              Search for an answer or browser help topic to create a tickect
            </h4>  
             <input type="text" class="form-control" placeholder="Eg. how do activate F&o ,why is my order geeting rejected " aria-label="Username" aria-describedby="inputGroup-sizing-lg"></input>
              
             <Link style={{color:"white",padding:"2px"}}>Track account opening</Link>
             <Link  style={{color:"white",padding:"2px"}}> track segment activation </Link>
             <Link  style={{color:"white",padding:"2px"}}> Interday margin</Link>
             <Link  style={{color:"white",padding:"2px"}}>kite user munnal</Link>
             
          </div>
          <div >
            <h4>Featured</h4>
             1. <Link style={{color:"white"}}>Current Take Overs and Delisting -January 2026</Link> <br />
             2. <Link style={{color:"white"}}>Letest INterday leverages -MIS & CO</Link> <br />
          </div>
           </div>
          </div>
          <div className="col-1"></div>
          </div>
  );
}

export default Hero;
