import React from "react";
import "./styles.css";
import OrangeBox from "../common/OrangeBox";
import background from "./background.png";

const Concept = () => (
  <div className="concept-container mt-3">
    <div className="container">
      <div className="row pb-2">
        <h2>O que é o empréstimo?</h2>
        <h2>Quem pode contratar?</h2>
      </div>

      <div className="pt-3 row text-start flex-column-reverse flex-md-row">
        <div className="col-12 col-md-5">
          <img className="img-fluid" src={background} alt="CTPS" />
        </div>
        <div className="col-12 col-md-7 py-4 align-self-center">
          <div className="d-flex flex-column justify-content-center text-start">
            <div className="mb-3">
              <h3>
                Modalidade de empréstimo, autorizado pela lei 13.313/16,
                destinado a{" "}
                <strong>
                  trabalhador com carteira assinada (CLT) com idade a partir de
                  18 anos e saldo no FGTS
                </strong>{" "}
                desde que tenha optado pela modalidade saque-aniversário.
              </h3>
            </div>
            <div className="mb-3">
              <h3>
                <strong>É possível antecipar até 5 parcelas anuais do seu
                saque-aniversário</strong> sendo o saldo mínimo do FGTS de apenas R$
                300,00 para você poder contratar.
              </h3>
            </div>
          </div>
            <OrangeBox url="http://www.finazul.com.br" />
        </div>
      </div>
    </div>
  </div>
);

export default Concept;
