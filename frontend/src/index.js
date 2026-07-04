import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import HomePage from './landing_page/Home/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import Pricing from './landing_page/Pricing/PricingPage';
import Support from './landing_page/Support/Support';
import Product from './landing_page/Products/Product';
import Singup from './landing_page/Singup/singup';
import AboutPage from './landing_page/About/AboutPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/AboutPage" element={<AboutPage/>}></Route>
     <Route path='/pricing' element={<Pricing/>}></Route>
     <Route path='/product' element={<Product/>}></Route>
      <Route path='/Singup' element={<Singup/>}></Route>
       <Route path='/support' element={<Support/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
);

 
