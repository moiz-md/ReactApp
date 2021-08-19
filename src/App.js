import React, { Component } from "react";
// import Navbar from 'react-bootstrap/Navbar'
// import Button from 'react-bootstrap/Button';
// @import "~bootstrap/scss/bootstrap";
// import "./App.css";
import Banner from "./Atom/Banner/banner";

import Navbar from "./Atom/Navbar/navbar.jsx";
import Productlist from "./Product/productlist.jsx";
import { Route } from "react-router-dom";
import Footer from "./Atom/Footer/footer";
import Mainlayout from "./Molecule/Mainlayout/mainlayout";
import ActionButton from "./Atom/ActionButton/actionbutton";
import ProductCard from "./Molecule/ProductCard/productcard";
import ProductList from "./Organism/ProductList/productlist";
const App = () => {

    return (
      // <div className="main-wrapper">
      //   <div className="row">
      //     <Route path="/" Component={Homez} />
      //       <Navbar />
      //   </div>
      //   <div className="row">
      //     <Banner />
      //   </div>
      //   <div className="row">
      //     <div className="col">
      //       <Productlist />
      //     </div>
      //   </div>
      //   <Footer/>
      // </div>
      <div>
       <Navbar />
       <Banner/>
    
     <ProductList/>
       <Footer /> 
      </div>

    );
}

export default App;
