import { logDOM } from "@testing-library/react";
import React from "react";
import logo from "./assets/logo.png";

function Navbar() {
  return (
    <>
      <div classNameName="navbar-nav ">
        <nav className="navbar navbar-expand-lg navbar-light bg-custom">
          {/* <a className="navbar-brand" href="#">ALLIANCEINDUSTRIES</a> */}
          <img src={logo} alt="logo" />
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mr-auto ">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  License
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact <span class="glyphicon glyphicon-user"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Members <span class="glyphicon glyphicon-search"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
