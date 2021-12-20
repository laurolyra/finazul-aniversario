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
  <div className="why-contract-container d-flex py-5" id="why-contract">
    <div className="container">
      <h2>Por que contratar?</h2>
     
      <div className="text-start container py-4">
        <div className="row justify-content-center">
          <Topic
            imgSrc={simpleDigital}
            text="Contratação em poucos minutos. Simples e digital."
          />
        </div>
        <div className="row justify-content-center">
          <Topic imgSrc={fgts} text="Saldo no FGTS a partir de R$ 300,00." />
        </div>
        <div className="row justify-content-center">
          <Topic imgSrc={anual} text="Parcelas anuais e não mensais." />
        </div>
        <div className="row justify-content-center">
          <Topic imgSrc={money} text="Disponível para negativados." />
        </div>
        <div className="row justify-content-center">
          <Topic imgSrc={calc} text="O melhor empréstimo para você." />
        </div>
      </div>
        <div className="row justify-content-center justify-content-center m-auto">
          <OrangeBox />
        </div>
    </div>
  </div>
);

export default WhyContract;
