import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const ActionButton = (props) => {
  return (
    <button className="btn btn-lg  btn-layout justify-content-between aling-items-center">
      <i className={props.buttonIcon}></i> {props.buttonName}
    </button>
  );
};

export default ActionButton;
