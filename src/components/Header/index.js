import React, { useState } from "react";
import finazulLogo from "./finazul-logo.png";
import OrangeBox from "../common/OrangeBox";
import "./styles.css";

const Header = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <section className="fixed-top finazul-header">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="col-3">
            <a href="http://www.finazul.com.br">
              <img src={finazulLogo} alt="logo Finazul"></img>
            </a>
          </div>
          <div className="col-md-9 d-none d-md-flex justify-content-around align-items-center">
            <a className="header-link" href="#concept">
              O que é?
            </a>
            <a className="header-link" href="#why-contract">
              Por que?
            </a>
            <a className="header-link" href="#how-to">
              Como fazer?
            </a>
            <a className="header-link" href="#faq">
              Dúvidas?
            </a>
            <a className="header-link" href="#contact">
              Atendimento
            </a>
            <OrangeBox body={false} />
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
                className={
                  showOptions ? ".navbar-items .navbar-menu.active" : ""
                }
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
        </div>
      </nav>
    </section>
  );
};

export default Header;
