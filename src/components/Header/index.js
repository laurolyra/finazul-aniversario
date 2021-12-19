import React, { useState } from "react";
import finazulLogo from "./finazul-logo.png";
import OrangeBox from "../common/OrangeBox";
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

        <ul className="navbar-menu">
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

        <div className="d-md-none d-flex col-5 justify-content-between align-items-center">
          <OrangeBox body={false} />
          <a onClick={() => setShowOptions(!showOptions)}>
            {!showOptions ? (
              <i className="fa fa-bars"></i>
            ) : (
              <i className="fa fa-times"></i>
            )}
          </a>
          {showOptions && (
            <ul
              className={showOptions ? ".navbar-items .navbar-menu.active" : ""}
            >
              <a
                onClick={() => setShowOptions(false)}
                className="navbar-links"
                href="#concept"
              >
                O que é?
              </a>
              <a
                onClick={() => setShowOptions(false)}
                className="navbar-links"
                href="#why-contract"
              >
                Por que?
              </a>
              <a
                onClick={() => setShowOptions(false)}
                className="navbar-links"
                href="#how-to"
              >
                Como fazer?
              </a>
              <a
                onClick={() => setShowOptions(false)}
                className="navbar-links"
                href="#faq"
              >
                Dúvidas?
              </a>
              <a
                onClick={() => setShowOptions(false)}
                className="navbar-links"
                href="#contact"
              >
                Atendimento
              </a>
            </ul>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Header;
