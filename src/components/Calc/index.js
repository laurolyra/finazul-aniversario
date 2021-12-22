import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "./styles.css";

const Calc = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [balance, setBalance] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [userData, setUserData] = useState({ balance: "", dateOfBirth: "" });

  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
  };

  const whiteboardRef = useRef();

  const next = () => {
    setCurrentSlide(currentSlide + 1);
    whiteboardRef.current.slickNext();
  };

  const restart = () => {
    setCurrentSlide(0);
    whiteboardRef.current.slickGoTo(0);
  };

  const goToForm = () => {
    restart();
    window.open("https://www.finazul.com.br/app/emprestimo/registro");
  };

  const formatNumber = (value) => {
    let format = value;
    format = format + "";
    format = parseInt(format.replace(/[\D]+/g, ""));
    format = format + "";
    format = format.replace(/([0-9]{2})$/g, ",$1");

    if (format.length > 6) {
      format = format.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    if (format == "NaN") format = "";
    setBalance(format);
  };

  const sendData = () => {
    setCurrentSlide(currentSlide + 1);
    //função adequada para enviar balance e date of birth para a API
  };

  const checkOptions = () => {
    console.log("ok", currentSlide);
    if (currentSlide + 1 > 2) return goToForm();
    return next();
  };

  return (
    <div className="calc-container py-md-5 py-2">
      <div className="container pt-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 mb-3">
            <h2 id="calc-box" className="mb-3">
              De quanto você precisa?
            </h2>
            <h3>
              Simule agora e veja quanto receber com a antecipação do seu
              Saque-Aniversário.
            </h3>
          </div>
        </div>

        <div className="row justify-content-center mb-3">
          <div className=" white-board col-md-7 col-11">
            <Slider className="d-flex py-2" {...settings} ref={whiteboardRef}>
              <div>
                <h3 className="py-3">
                  <strong>Informe seu saldo do FGTS</strong>
                </h3>
                <h4 className="pb-3">
                  Não sabe seu saldo FGTS?{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.caixa.gov.br/atendimento/aplicativos/fgts/"
                  >
                    Clique aqui.
                  </a>
                </h4>
                <div className="col-12 col-md-7 d-flex align-items-baseline justify-content-between input-container m-auto">
                  <p className="p-2">R$</p>
                  <input
                    className="text-end p-2"
                    placeholder="0,00"
                    size="8"
                    maxLength={8}
                    onKeyPress={(event) => {
                      if (/([A-z])/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    value={balance}
                    onChange={(e) => formatNumber(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <h3 className="py-3 mb-4">
                  <strong>Informe sua data de nascimento</strong>
                </h3>
                <input
                  className="col-9 col-md-7 d-flex align-items-baseline justify-content-between input-container m-auto text-center p-2"
                  placeholder="dd/mm/aaaa"
                  type="date"
                  maxLength={8}
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
              <div>
                {/* Aqui é a refatoração encessária a depender da respota da API */}
                <h3 className="py-3">
                  <strong>Resultado</strong>
                </h3>
                <h4 className="pb-3">
                  Você pode antecipar até R$0.000,00 
                </h4>
              </div>
            </Slider>

            <div className="pb-2">
              { currentSlide >= 2 ? (
                <button
                className="btn btn-primary p-2 rounded-3"
                onClick={() => restart()}
              >
                <strong>Outro Valor</strong>
              </button>) : undefined
              }
              <button
                className="btn btn-primary p-2 rounded-3"
                onClick={() => (currentSlide >= 2 ? goToForm() : checkOptions())}
              >
                <strong>{currentSlide >= 2 ? "Simular Já" : "Avançar"}</strong>
              </button>
            </div>
          </div>
        </div>

        <p>*Saldo do FGTS mínimo para contratar de R$ 300,00.</p>
      </div>
    </div>
  );
};

export default Calc;
