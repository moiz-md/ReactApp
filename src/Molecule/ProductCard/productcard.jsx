import React from "react";
import ActionButton from "../../Atom/ActionButton/actionbutton";
import "./productcard.css";

const ProductCard = (props) => {
  return (
    <>
      <div className="row">
        <div className="card-dimensions col-4 ">
          <div className="card-header">
            <img src={props.cardDetails.Image} />
          </div>
          <div className="card-body ">
            <div className="row">
              <div className="col-6"> {props.cardDetails.Name}</div>
              <div className="col-6">{props.cardDetails.Downloads}</div>
            </div>
            <div className="row">
              <div className="col-12">{props.cardDetails.Description}</div>
            </div>
          </div>
          <div className="card-footer">
            <ActionButton buttonName="Details" buttonIcon="fa fa-eye" />
            <ActionButton buttonName="Delete" buttonIcon="fa fa-trash" />
            <ActionButton
              buttonName="Buy Now"
              buttonIcon="fa fa-shopping-cart"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
