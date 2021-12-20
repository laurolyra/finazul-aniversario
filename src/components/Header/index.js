import React, { useState } from "react";
import finazulLogo from "./finazul-logo.png";
import "./styles.css";

const Header = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <section className="fixed-top finazul-header">
      <nav className="navbar-items">
        <div className="d-block navbar-logo">
          <a href="http://www.finazul.com.br">
            <img src={finazulLogo} alt="logo Finazul"></img>
          </a>
        </div>

        <ul className="navbar-menu d-none d-md-grid">
          <li>
            <a href="https://www.finazul.com.br/app/sobre" className="navbar-links">
            Quem somos
            </a>
          </li>
          <li>
            <a href="https://www.finazul.com.br/app/faq" className="navbar-links">
            Dúvidas comuns
            </a>
          </li>

          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5571992000994&amp;amp;text=Olá, desejo informações sobre empréstimo consignado!&amp;amp;source=&amp;amp;data="
              className="navbar-links"
            >
              Atendimento
            </a>
          </li>
        </ul>

        <div className="nav-btn">
          <a href="#calc-box" className="button">Simule Já</a>
        </div>

        <a className="d-md-none hamburger-close" onClick={() => setShowOptions(!showOptions)}>
          {!showOptions ? (
            <i className="fa fa-bars"></i>
          ) : (
            <i className="fa fa-times"></i>
          )}
        </a>
      </nav>
      {showOptions && (
          <div className="d-flex flex-column justify-content-center">
            <ul
            className="navbar-items-mobile navbar-menu.active"
          >
           <li>
            <a href="https://www.finazul.com.br/app/sobre" className="navbar-links">
            Quem somos
            </a>
          </li>
          <li>
            <a href="https://www.finazul.com.br/app/faq" className="navbar-links">
            Dúvidas comuns
            </a>
          </li>

          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5571992000994&amp;amp;text=Olá, desejo informações sobre empréstimo consignado!&amp;amp;source=&amp;amp;data="
              className="navbar-links"
            >
              Atendimento
            </a>
          </li>
          </ul>
          </div>
        )}
    </section>
  );
};

export default Header;
