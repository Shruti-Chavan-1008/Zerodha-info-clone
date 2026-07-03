import React from 'react';
import { Link } from 'react-router-dom';

function Right({product_name ,product_description,image_url}) {
    return (
         <diV className='row'>
            <div className='col-1'></div>
            <div className='col' style={{ display: "flex", gap: "200px", marginTop: "100px" }}>
                <div style={{marginTop:"100px", padding:'10px'}}>
                    <h3>{product_name}</h3>
                    <p>{product_description}</p>
                    <Link>Lean more </Link>
                </div>
                <div>
                    <img src= {image_url} 
          style={{
            width: "500px",
            height:"400px",
            marginTop: "20px",
           
          }}/>
                </div>
            </div>
            <div className='col-1'></div>
         </diV>
      );
}

export default Right;