import React from "react";
import "./styles.css";
import OrangeBox from "../common/OrangeBox";

const Concept = () => (
  <div className="concept-container mt-3">
    <div className="container">
      <div className="row pb-2">
        <h2>O que é o empréstimo?</h2>
        <h2>Quem pode contratar?</h2>
      </div>
      </div>

      
      <div className="py-3 row justify-content-end text-start explanation mw-100">
        <div className="col-7">
          <div className="d-flex flex-column justify-content-between text-start explanation-column">
            <div>
              <h3>
                Modalidade de empréstimo, autorizado pela lei 13.313/16,
                destinado a{" "}
                <strong>
                  trabalhador com carteira assinada (CLT) com idade a partir
                  de 18 anos e saldo no FGTS
                </strong>{" "}
                desde que tenha optado pela modalidade saque-aniversário.
              </h3>
            </div>
            <div>
              <h3>
                É possível antecipar até 5 parcelas anuais do seu
                saque-aniversário sendo o saldo mínimo do FGTS de apenas R$
                300,00 para você poder contratar.
              </h3>
            </div>
            <OrangeBox />
          </div>
        </div>
      </div>
      
  </div>
);

export default Concept;
