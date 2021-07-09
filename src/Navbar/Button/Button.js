import React from "react";
import './Button.css';

function Button() {
  return (
    <div className="button-wrapper">
          <div className="feature-border">
            <h1>Feature Products</h1>
          </div>
          {/* <div className="border">
            <hr style={{ weight: 5, color: "cyan" }} />
          </div> */}
          <div>
      <button type="button" className="btn btn-primary">
        Add Product{" "}
      </button>
      </div>
    </div>
  );
}

export default Button;
