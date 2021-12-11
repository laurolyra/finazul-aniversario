import React from "react";
import finazulLogo from "./images/finazul-logo.png";
import menuIcon from "./images/menu-icon.png";
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
        <div className="d-flex align-items-center col-5 justify-content-around">
          <OrangeBox url="http://www.finazul.com.br" />
          <a href="./">
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
