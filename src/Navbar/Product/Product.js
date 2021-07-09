import React from "react";
// import Product1 from "./assets/product-image-1.png";

export default function Product() {
  return (
    <>
      <div className="col-6 col-sm-6 col-lg-4">
        <img
          className="product1"
          src={process.env.PUBLIC_URL + "/assets/product-image-1.png"}
        />
      </div>
      <div className="PD">
        <h3>SoftLand</h3>
        <h4>4,206 Downloads</h4>
        <p>
          SOftland is a morden and creative app loading HTML website
          template.Any one use this this template to showcase their app or
          service.SOftland is an ultimate.
        </p>
      </div>
    </>
  );
}
