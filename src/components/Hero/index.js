import React from "react";
import "./styles.css";
import OrangeBox from "../common/OrangeBox";

const Hero = () => (
  <section className="hero-container d-flex pt-3">
    <div className="container d-flex flex-column justify-content-center mt-2 mt-md-0 pt-md-3">
      <div className="col-6 col-md-5 text-start d-flex flex-column h-md-75 justify-content-around mb-3 pt-3">
        <h2 className="title mb-3">Dinheiro parado no FGTS?</h2>
        <h3 className="mb-3">
          <strong>
            Receba antecipadamente até 5 anos do seu Saque-Aniversário FGTS.
          </strong>
        </h3>
        <h4 className="mb-3">
          O dinheiro é liberado em poucas horas e está disponível também para
          negativados.
        </h4>
        <h4 className="mb-3">É simples, rápido e digital.</h4>
        <OrangeBox/>
      </div>
    </div>
  </section>
);

export default Hero;
