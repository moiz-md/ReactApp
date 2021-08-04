import React from "react";
// import Product1 from "./assets/product-image-1.png";

export default function Product(props) {
  return (
    <>
      <div className="col-lg-4">
        <figure>
          {/* <img
          className="product1"
          src={process.env.PUBLIC_URL + "/assets/product-image-1.png"}
        /> */}
          <figcaption>
            <img src={props.value.Image} />
            <h3 className="text-left">{props.value.Name}</h3>
            <h5 className="text-right">{props.value.Downloads}</h5>
            <h6>{props.value.Description}</h6>
          </figcaption>
        </figure>
        <div className=" buttons-body btn-group d-flex justify-content-between aling-items-center ">
          <button className="btn btn-lg btn-layout">
            <i className="fa fa-eye"></i> Details
          </button>
          <button
            type="button"
            className="btn btn-lg btn-layout"
            onClick={props.onClick}
          >
            <i className="fa fa-trash" aria-hidden="true"></i> Delete
          </button>
          <button type="button" className="btn btn-lg btn-layout">
            <i className="fa fa-shopping-cart"></i> Buy Now
          </button>
        </div>
      </div>
      {/* <div className="col-6 col-sm-6 col-lg-4">
        
    
       
      </div> */}
    </>
  );
}
