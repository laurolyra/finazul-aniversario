import React from "react";
import finazulLogo from "./finazul-logo.png";
import menuIcon from "./menu-icon.png";
import OrangeBox from "../common/OrangeBox";
import "./styles.css";

const Header = () => (
  <section className="fixed-top">
    <nav className="navbar">
      <div className="container">
        <div>
          <a href="./">
            <img src={finazulLogo} alt="logo Finazul"></img>
          </a>
        </div>
        <div className="d-flex align-items-center col-3 justify-content-around">
          <OrangeBox/>
          <a className="d-md-none">
            <img
              className="menu-icon"
              src={menuIcon}
              alt="icone de menu de opções"
            ></img>
          </a>
        </div>
      </div>
    </nav>
  </section>
);

export default Header;
