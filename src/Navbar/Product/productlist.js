import React, { Component } from "react";
import Product from "./Product";

export default class productlist extends Component {
  render() {
    return (
      <>
        <div>
          <div className="feature">
            <h1>Feature Products</h1>
          </div>
          <div className="border">
            <hr style={{ weight: 5, color: "cyan" }} />
          </div>
          <Product />
        </div>
      </>
    );
  }
}
