import React from "react";
import "./styles.css";

const Concept = () => (
  <div className="concept-container mt-3">
    <div className="container">
      <div className="row">
      <h2>O que é o empréstimo?</h2>
      <h2>Quem pode contratar?</h2>
      </div>
      <div className="pt-3 row justify-content-end text-start mt-2">
        <div className="col-7 d-flex flex-column">
          <h3>
            Modalidade de empréstimo, autorizado pela lei 13.313/16, destinado a
            trabalhador com carteira assinada (CLT) com idade a partir de 18
            anos e saldo no FGTS desde que tenha optado pela modalidade
            saque-aniversário.
          </h3>
          <h3>
            É possível antecipar até 5 parcelas anuais do seu saque-aniversário
            sendo o saldo mínimo do FGTS de apenas R$ 300,00 para você poder
            contratar.
          </h3>
        </div>
      </div>
    </div>
  </div>
);

export default Concept;
