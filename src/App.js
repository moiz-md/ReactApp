import React, { Component } from "react";
// import Navbar from 'react-bootstrap/Navbar'
// import Button from 'react-bootstrap/Button';
// @import "~bootstrap/scss/bootstrap";
// import "./App.css";
import Banner from "./Navbar/Banner/banner.jsx";
import Button from "./Navbar/Button/Button.jsx";
import "./Navbar/main.css";
import Navbar from "./Navbar/navbar.jsx";
import Productlist from "./Navbar/Product/productlist.jsx";
class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        {/* for navbar */}
        <div className="row">
          <Navbar />
        </div>
        {/* for banner */}
        <div className="row">
          <Banner />
        </div>
        {/* for feature product */}
        {/* <div className="row">
          <Button />
        </div> */}
        {/* for content */}
        <div className="row">
          <div className="col">
            <Productlist />
          </div>
          {/* <div className="col-sm-4">
            <Productlist />
          </div>
          <div className="col-sm-4">
            <Productlist />
          </div> */}
        </div>
      </div>

      // <div className="App">
      //   <Navbar />
      //   <Banner />
      //   <Button />
      //   <Productlist />
      //   {/* <h1>Learn React {name}</h1> */}
      // </div>
    );
  }
}

const name = "Ansari Moiz";

export default App;
