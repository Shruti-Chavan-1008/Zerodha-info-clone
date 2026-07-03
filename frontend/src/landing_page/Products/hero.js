import React from 'react';
import { Link } from 'react-router-dom';


function Hero() {
    return (
    
    <div style={{textAlign:"center", marginTop:'100px'}}>
        <h1>Technology</h1>
        <h4>Sleek,modern and intuitive trading platfroms</h4>
        <p>Check out our <Link  to='/pricing'>investement offerings</Link></p>
    </div>);
}

export default Hero;