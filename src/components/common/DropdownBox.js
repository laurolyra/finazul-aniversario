import React, { useState } from "react";
import "./styles.css";

const DropdownBox = () => {
  const [showQuestions, setShowQuestions] = useState(false);

  return (
    <div className="row justify-content-between dropdown-box align-items-center mw-75 position-relative text-start mb-3">
      <div className="col-8">
        <h2 className="py-2 m-0">Saiba Mais sobre Saque-Aniversário</h2>
      </div>
      <div
        className="col-2 text-center"
        style={{ cursor: "pointer" }}
        onClick={() => setShowQuestions(!showQuestions)}
      >
        {showQuestions ? (
          <i className="fa fa-chevron-up"></i>
        ) : (
          <i className="fa fa-chevron-down"></i>
        )}
      </div>
      <div
        style={{ display: showQuestions ? "flex" : "none" }}
        className="flex-column justify-content-around show-hide-container"
      >
        <div className="row text-start question-box">
          <h3>O que é o saque aniversário?</h3>
          <h4>
            Para sacar o seu saldo disponível no FGTS, agora existe a modalidade
            de saque-aniversário, que permite que todo mês de aniversário, você
            saque um percentual do saldo disponível em seu fundo de garantia.
          </h4>
        </div>
        <div className="row text-start question-box">
          <h3>O que é o saque aniversário?</h3>
          <h4>
            Para sacar o seu saldo disponível no FGTS, agora existe a modalidade
            de saque-aniversário, que permite que todo mês de aniversário, você
            saque um percentual do saldo disponível em seu fundo de garantia.
          </h4>
        </div>
        <div className="row text-start question-box">
          <h3>O que é o saque aniversário?</h3>
          <h4>
            Para sacar o seu saldo disponível no FGTS, agora existe a modalidade
            de saque-aniversário, que permite que todo mês de aniversário, você
            saque um percentual do saldo disponível em seu fundo de garantia.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default DropdownBox;
