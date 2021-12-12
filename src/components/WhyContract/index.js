import React from "react";
import "./styles.css";
import Topic from "../common/Topic";
import OrangeBox from "../common/OrangeBox";

import simpleDigital from "./simple-digital.png";
import fgts from "./fgts.png";
import anual from "./anual.png";
import money from "./money.png";
import calc from "./calc.png";

const WhyContract = () => (
  <div className="why-contract-container d-flex">
    <div className="container d-flex flex-column justify-content-around">
      <h2>Por que contratar?</h2>
      <div className="topics row justify-content-center">
        <div className="col-10 container topics-board d-flex flex-column justify-content-between">
          <Topic
            imgSrc={simpleDigital}
            text="Contratação em poucos minutos. Simples e digital."
          />
          <Topic imgSrc={fgts} text="Saldo no FGTS a partir de R$ 300,00."/>
          <Topic imgSrc={anual} text="Parcelas anuais e não mensais."/>
          <Topic imgSrc={money} text="Disponível para negativados."/>
          <Topic imgSrc={calc} text="O melhor empréstimo para você." />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <OrangeBox />
      </div>
    </div>
  </div>
);

export default WhyContract;
