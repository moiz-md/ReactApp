import React from 'react';
import ActionButton from '../../Atom/ActionButton/actionbutton';
import './productcard.css'


const ProductCard = (props) => {

    return (
        <> 
    <div className="card-dimensions">
       <div className="card-header">
       <img src={props.cardDetails.Image} />
       </div>
       <div className="card-body">
           <div className="row">
               <div className = "col-8"> {props.cardDetails.Name}</div>
               <div className = "col-4">{props.cardDetails.Downloads}</div>
           </div>
           <div className = "row">
               <div className="col">{props.cardDetails.Description}</div>
           </div>
       </div>
       <div className="card-footer">
         <ActionButton buttonName="Details" buttonIcon="fa fa-eye"/>
         <ActionButton buttonName="Delete" buttonIcon="fa fa-trash"/>
         <ActionButton buttonName="Buy Now" buttonIcon="fa fa-shopping-cart"/>
         </div>
       </div>
    </>
    )
}

export default ProductCard;