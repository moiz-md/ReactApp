import React from "react";
// import img2 from  "./assets/intro-bg.png";

function Banner() {
  return (
    <div className="intro-bg">
      <img
        className="img1"
        src={process.env.PUBLIC_URL + "/assets/intro-bg.png"}
      />
      <h4>Banner Title Comes Here</h4>
      <p>
        Someday someone will break you so badly that you’ll become unbreakable.
      </p>
      <div className="banner-logo ">
        <i class="fa fa-twitter"></i>
        <i class="fa fa-facebook-square"></i>
        <i class="fa fa-wifi"></i>
        <i class="fa fa-envelope"></i>
      </div>
    </div>
  );
}

export default Banner;
