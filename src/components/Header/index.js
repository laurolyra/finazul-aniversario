import React from "react";
import finazulLogo from "./finazul-logo.png";
import menuIcon from "./menu-icon.png";
import OrangeBox from "../common/OrangeBox";
import "./styles.css";

const Header = () => (
  <section className="fixed-top">
    <nav className="navbar">
      <div className="container-fluid">
        
        <div className="col-3">
          <a href="http://www.finazul.com.br">
            <img src={finazulLogo} alt="logo Finazul"></img>
          </a>
        </div>
        <div className="col-9 d-none d-md-flex justify-content-around align-items-center">
          <a className="header-link" href="#concept">O que é?</a>
          <a className="header-link" href="#why-contract">Por que?</a>
          <a className="header-link" href="#how-to">Como fazer?</a>
          <a className="header-link" href="#faq">Dúvidas?</a>
          <a className="header-link" href="#contact">Atendimento</a>
          <OrangeBox />
        </div>
        

        <a className="d-md-none">
          <img
            className="menu-icon"
            src={menuIcon}
            alt="icone de menu de opções"
          ></img>
        </a>
      </div>
    </nav>
  </section>
);

export default Header;
