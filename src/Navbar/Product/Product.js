import React from "react";
// import Product1 from "./assets/product-image-1.png";

export default function Product() {
  return (
    <>
    <figure>
    <img
          className="product1"
          src={process.env.PUBLIC_URL + "/assets/product-image-1.png"}
        />
  <figcaption> <h3>SoftLand</h3>
        <h4>4,206 Downloads</h4>
        <p>
          SOftland is a morden and creative app loading HTML website <br />
          template.Any one use this this template to showcase their app or <br />
          service.SOftland is an ultimate.
        </p></figcaption>
</figure>

      {/* <div className="col-6 col-sm-6 col-lg-4">
        
      </div> */}
      {/* <div className="PD">
       
      </div> */}
    </>
  );
}
