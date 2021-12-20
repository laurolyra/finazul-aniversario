import React from "react";
import "./styles.css";

const Contact = () => (
  <div className="contact-container py-3" id="contact">
    <div className="container">
      <div className="row py-3">
        <h2>Atendimento</h2>
        <h3>Fale com a gente para esclarecer 
todas as suas dúvidas</h3>
      </div>

      <div className="row">
        <div className="col-11 col-md-7 m-auto pb-4">
          <div className="row whatsapp-box align-items-center">
            <div className="col-7 p-3">
              <h4 className="m-0">
                Nosso time está sempre disponível no <strong>Whatsapp </strong>
                para atender você
              </h4>
            </div>
            <div className="col-5">
              <button
                className="p-2 px-3"
                onClick={() =>
                  window.open(
                    "https://wa.me/5571992000994?text=Quero%20tirar+d%C3%BAvidas%20do%20empr%C3%A9stimo%20FGTS"
                  )
                }
              >
                Enviar mensagem
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-start">
        <p>
          Disponibilidade de crédito adequada à política de concessão das
          Instituições Financeiras Parceiras. Parcelas, prazos, taxa de juros,
          tarifas e CET (Custo Efetivo Total) podem variar conforme a unidade
          pagadora e sem necessidade de aviso prévio.
        </p>

        <p>
          A finazul.com.br é uma plataforma de contratação de crédito consignado
          online que tem como proprietária a Finazul Serviços Financeiros. Esta
          não é uma instituição financeira e não realiza operações de crédito
          diretamente, mas sim uma plataforma digital que atua como
          correspondente bancário.
        </p>

        <p>
          Taxa de juros 2,04% a.m e Custo Efetivo Total de 2,24% a.m. Exemplo:
          Considerando a data de operação em 30 de novembro de 2021 e
          aniversário no mês de julho, uma conta com saldo de R$ 8.000,00 no
          FGTS pode ter R$ 4.309,04 antecipados a serem pagos em 5 parcelas
          anuais no total de R$ 6.973,65. Estes valores são exemplificativos.
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
