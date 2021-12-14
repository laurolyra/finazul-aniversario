import React from "react";
import "./styles.css";
import faqImage from "./faq-image.png";
import DropdownBox from "../common/DropdownBox";

// const dropdownFormat = {
//   topic: "Saiba Mais sobre Saque-Aniversário",
//   questions: [{
//     question: ""
//   }]
// }

const Faq = () => (
  <div className="faq-container position-relative py-3">
    <div className="container">
      <div className="header-image row justify-content-around align-items-center py-3">
        <div className="col-md-5 col-4 offset-md-1">
          <h2>Dúvidas comuns</h2>
          <h3>Todas as respostas para as suas dúvidas você encontra aqui</h3>
        </div>
        <div className="col-8 col-md-6">
          <img className="image-fluid mw-100" src={faqImage} alt="faq image" />
        </div>
      </div>
      <div className="pb-3 d-flex flex-column justify-content-around">
        <DropdownBox />
        <DropdownBox />
        <DropdownBox />
      </div>
    </div>
  </div>
);

export default Faq;
