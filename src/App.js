import React, { Component } from "react";
// import Navbar from 'react-bootstrap/Navbar'
// import Button from 'react-bootstrap/Button';
// @import "~bootstrap/scss/bootstrap";
import "./App.css";
import Banner from "./Navbar/Banner/banner";
import Button from "./Navbar/Button/Button";
import "./Navbar/main.css";
import Navbar from "./Navbar/navbar";
import Productlist from "./Navbar/Product/productlist";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <Button />
        <Productlist />
        {/* <h1>Learn React {name}</h1> */}
      </div>
    );
  }
}

const name = "Ansari Moiz";

export default App;
