import React from "react";
import "./styles.css";
import OrangeBox from "../common/OrangeBox";

const Hero = () => (
  <section className="hero-container d-flex pt-3">
    <div className="container d-flex flex-column justify-content-center mt-5 mt-md-0">
      {/* <h2 className="title d-md-none">Dinheiro parado no FGTS?</h2> */}
      <div className="col-6 col-md-5 h-100 text-start d-flex flex-column h-md-75 justify-content-around mb-3">
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
