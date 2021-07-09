import React from "react";
import './Banner.css';
// import img2 from  "./assets/intro-bg.png";

function Banner() {
  return (
    <div className="intro-bg">
      <img
        className="banner-size"
        src={process.env.PUBLIC_URL + "/assets/intro-bg.png"}
      />
      <span className="textover-banner">
      <h4>Banner Title Comes Here</h4>
      <p>
        Someday someone will break youso badly that you’ll become unbreakable.
      </p>
      <div className="banner-logo ">
        <i class="fa fa-twitter"></i>
        <i class="fa fa-facebook-square"></i>
        <i class="fa fa-wifi"></i>
        <i class="fa fa-envelope"></i>
      </div>
      </span>
    </div>
  );
}

export default Banner;
