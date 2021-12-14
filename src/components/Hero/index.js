import React from "react";
import "./styles.css";
import OrangeBox from "../common/OrangeBox";

const Hero = () => (
  <section className="hero-container d-flex">
    <div className="container d-flex flex-column justify-content-center">
      <div className="col-5 text-start d-flex flex-column h-75 justify-content-around mb-3">
        <h2 className="title">Dinheiro parado no FGTS?</h2>
        <h3>
          <strong>
            Receba antecipadamente até 5 anos do seu Saque-Aniversário FGTS.
          </strong>
        </h3>
        <h4>
          O dinheiro é liberado em poucas horas e está disponível também para
          negativados.
        </h4>
        <h4 className="">É simples, rápido e digital.</h4>
      </div>
        <div className="col-5">
          <OrangeBox/>
        </div>
    </div>
  </section>
);

export default Hero;
