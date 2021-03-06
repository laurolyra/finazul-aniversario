import React from "react";
import "./styles.css";
import faqImage from "./faq-image.png";
import DropdownBox from "../common/DropdownBox";

import { topics } from "./topics";

const Faq = () => (
  <div className="faq-container position-relative py-4" id="faq">
    <div className="container">
      <div className="header-image row justify-content-around align-items-center py-3">
        <div className="col-md-5 col-6 offset-md-1">
          <h2>Dúvidas comuns</h2>
          <h3>Todas as respostas para as suas dúvidas você encontra aqui</h3>
        </div>
        <div className="col-6">
          <img className="image-fluid mw-100" src={faqImage} alt="faq image" />
        </div>
      </div>
      <div className="container">
        {topics.map((topicObj) => <DropdownBox key={topicObj.topicHeader} topic={topicObj}/>) }
      </div>
    </div>
  </div>
);

export default Faq;
