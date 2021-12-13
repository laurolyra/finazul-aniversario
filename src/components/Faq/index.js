import React from "react";
import "./styles.css";
import faqImage from "./faq-image.png";
import DropdownBox from "../common/DropdownBox";

const Faq = () => (
  <div className="faq-container position-relative">
    <div className="container">
      <div className="header-image d-flex justify-content-around align-items-center">
        <div className="col-4">
          <h2>Dúvidas comuns</h2>
          <h3>Todas as respostas para as suas dúvidas você encontra aqui</h3>
        </div>
        <div className="col-5">
          <img src={faqImage} alt="faq image" />
        </div>
      </div>
      <div className="pb-3 dropdown-boxes-container d-flex flex-column justify-content-around">
        <DropdownBox />
        <DropdownBox />
        <DropdownBox />
      </div>
    </div>
  </div>
);

export default Faq;
