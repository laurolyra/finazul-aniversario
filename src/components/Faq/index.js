import React from "react";
import "./styles.css";
import faqImage from "./faq-image.png";
import DropdownBox from "../common/DropdownBox";

const knowMoreTopic = {
  topicHeader: "Saiba Mais sobre Saque-Aniversário",
  questions: [
    {
      question: "O que é o saque aniversário?",
      answer:
        "Para sacar o seu saldo disponível no FGTS, agora existe a modalidade de saque-aniversário, que permite que todo mês de aniversário, você saque um percentual do saldo disponível em seu fundo de garantia.",
    },
    {
      question: "O que é a antecipação do saque-aniversário?",
      answer:
        "Se você escolher a modalidade Saque Aniversário, você pode fazer o empréstimo com garantia do FGTS e antecipar o saldo do mês do seu  aniversário. O saldo é utilizado como garantia da operação. É só autorizar o PAN a consultar seus saldos de Fundo de Garantia."
    },
    {
      question: "Quais as vantagens de antecipar o saque-aniversário?",
      answer:
        "O empréstimo com garantia no FGTS permite a antecipação do saldo do FGTS, sem precisar esperar o mês do seu aniversário para resgatar. Você consegue antecipar."
    },
    {
      question: "Qual a diferença entre saque-rescisão e saque-aniversário?",
      answer:
        "O saque-aniversário é uma nova modalidade que permite você sacar o FGTS. Quando falamos da Antecipação do Saque-Aniversário, trata-se de uma nova modalidade de empréstimo autorizada pela lei 13.313/16 que tem como garantia o saldo do FGTS."
    }
  ],
};

const Faq = () => (
  <div className="faq-container position-relative py-3" id="faq">
    <div className="container">
      <div className="header-image row justify-content-around align-items-center py-3">
        <div className="col-md-5 col-4 offset-md-1">
          <h2>Dúvidas comuns</h2>
          <h3>Todas as respostas para as suas dúvidas você encontra aqui</h3>
        </div>
        <div className="col-8 col-md-6">
          <img className="image-fluid mw-100" src={faqImage} alt="faq image" />
        </div>
      </div>
      <div className="pb-3 d-flex flex-column justify-content-around">
        <DropdownBox topic={knowMoreTopic}/>
        {/* <DropdownBox />
        <DropdownBox /> */}
      </div>
    </div>
  </div>
);

export default Faq;
