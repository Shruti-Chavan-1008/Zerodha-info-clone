import React from "react";
import {Link} from 'react-router-dom';



function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand"  to="/">
            <img src='/images/logo.svg' style={{ 
            width: '150px',marginLeft:"40px"
             }} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
               <li class="nav-item">
                <Link class="nav-link d " to='/singup' >
                  SingUp
                </Link>
                </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page"  to='/AboutPage'>
                 About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link"  to='/pricing'>
                   Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link"  to="/product">
                  Product
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link "  to='/support' >
                Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
