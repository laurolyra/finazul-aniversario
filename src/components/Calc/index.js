import React from "react";
import "./styles.css";

const Calc = () => (
  <div className="calc-container pb-4">
    <div className="container pt-4">
      <div className="row justify-content-center">
        <div className="col-8 mb-3">
          <h2 className="mb-3">De quanto você precisa?</h2>
          <h3>
            Simule agora e veja quanto receber com a antecipação do seu
            Saque-Aniversário.
          </h3>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="white-board col-8 d-flex flex-column align-items-center justify-content-around py-2">
          <h3 className="dark-text-header pt-3">
            <strong>Informe seu saldo do FGTS</strong>
          </h3>
          <h4>
            Não sabe seu saldo FGTS? <a href="/">Clique aqui.</a>
          </h4>
          <input className="col-6 p-2 text-center" placeholder="R$0,00" />
          <button className="btn btn-primary p-2 rounded-3">Avançar</button>
        </div>
        <h4 className="pt-3">*Saldo do FGTS mínimo para contratar de R$ 300,00.</h4>
      </div>
    </div>
  </div>
);

export default Calc;
