import React from "react";
import "./styles.css";

const Footer = () => (
  <div className="footer-container">
    <div className="container">
      <div className="row footer-title">
        <p>Redes Sociais</p>
      </div>

      <div className="row justify-content-center m-auto pb-2 w-md-25">
        <div className="col-2">
          <i className="fa fa-whatsapp"></i>
        </div>
        <div className="col-2">
          <i className="fa fa-instagram"></i>
        </div>
        <div className="col-2">
          <i className="fa fa-facebook-square"></i>
        </div>
      </div>

      <div className="row address-box">
        <p className="m-0">FINAZUL SERVIÇOS FINANCEIROS - CNPJ 32.399.993/0001-02</p>
        <p className="m-0">Endereço: Rua Alceu Amoroso Lima, n° 786,</p>
        <p className="m-0">Edifício Trade Center, sala 713,</p>
        <p className="m-0">Caminho das Árvores, Salvador, Bahia</p>
      </div>
    </div>
  </div>
);

export default Footer;
