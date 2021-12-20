import React from "react";
import finazulLogoFooter from "./finazul-logo-footer.png";
import whatsappIcon from "./whatsapp.png";
import facebookIcon from "./facebook.png";
import instagramIcon from "./instagram.png";
import "./styles.css";

const Footer = () => (
  <div className="footer-container">
    <div className="container">
      <div className="d-flex flex-column flex-md-row py-2 py-md-5 justify-content-between align-items-center">
        <img className="finazul-logo-footer" src={finazulLogoFooter} />
        <div className="social-network">
          <h4>Redes sociais</h4>
          <div className="d-flex flex-row justify-content-around social-icons pb-2 w-md-25">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.finazul.com.br/app"
            >
              <img src={facebookIcon} alt="" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.finazul.com.br/app"
            >
              <img src={instagramIcon} alt="" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.finazul.com.br/app"
            >
              <img src={whatsappIcon} alt="" />
            </a>
          </div>
        </div>
        <div className="address-box">
          <p className="m-0">
            FINAZUL SERVIÇOS FINANCEIROS - CNPJ 32.399.993/0001-02
          </p>
          <p className="m-0">Endereço: Rua Alceu Amoroso Lima, n° 786,</p>
          <p className="m-0">Edifício Trade Center, sala 713,</p>
          <p className="m-0">Caminho das Árvores, Salvador, Bahia</p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
