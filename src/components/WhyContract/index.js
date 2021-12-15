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
  <div className="why-contract-container d-flex" id="why-contract">
    <div className="container">
      <h2>Por que contratar?</h2>
      <div className="row">
        <div className="py-4 mx-auto col-md-10 topics-board">
          <Topic
            imgSrc={simpleDigital}
            text="Contratação em poucos minutos. Simples e digital."
          />
          <Topic imgSrc={fgts} text="Saldo no FGTS a partir de R$ 300,00." />
          <Topic imgSrc={anual} text="Parcelas anuais e não mensais." />
          <Topic imgSrc={money} text="Disponível para negativados." />
          <Topic imgSrc={calc} text="O melhor empréstimo para você." />
        </div>
      </div>
      <div className="row justify-content-center m-auto">
        <OrangeBox/>
      </div>
    </div>
  </div>
);

export default WhyContract;
