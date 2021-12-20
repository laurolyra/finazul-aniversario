import React from "react";
import "./styles.css";
import OrangeBox from "../common/OrangeBox";
import background from "./background.png";

const Concept = () => (
  <div className="concept-container pt-4" id="concept">
    <div className="container">
      <div className="row py-2">
        <h2>O que é o empréstimo?</h2>
        <h2>Quem pode contratar?</h2>
      </div>

      <div className="pt-3 row flex-column-reverse flex-md-row">
        <div className="d-none d-md-block col-md-5 align-self-end">
          <img className="img-fluid" src={background} alt="CTPS" />
        </div>
        <div className="pb-5 col-12 col-md-7 align-self-center">
          <div className="d-flex flex-column justify-content-center text-center text-md-start">
            <div className="row p-1">
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
            <div className="row p-1">
              <h3>
                <strong>
                  É possível antecipar até 5 parcelas anuais do seu
                  saque-aniversário
                </strong>{" "}
                sendo o saldo mínimo do FGTS de apenas R$ 300,00 para você poder
                contratar.
              </h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <OrangeBox />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Concept;
