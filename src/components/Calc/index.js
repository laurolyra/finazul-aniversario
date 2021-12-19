import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "./styles.css";

const Calc = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [balance, setBalance] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

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

  const sendData = () => {
    setCurrentSlide(currentSlide + 1);
    //função adequada para enviar balance e date of birth para a API
  };

  const checkOptions = () => {
    console.log("ok", currentSlide);
    // if (currentSlide + 1 === 2 ) return sendData();
    if (currentSlide + 1 > 2) return restart();
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
                <div className="col-9 col-md-7 d-flex align-items-baseline justify-content-between input-container m-auto">
                  <p className="p-2">R$</p>
                  <input
                    className="text-end p-2"
                    placeholder="0,00"
                    size="8"
                    maxLength="8"
                    onKeyPress={(event) => {
                      if (/([A-z])/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <h3 className="py-3 mb-4">
                  <strong>Informe sua data de nascimento</strong>
                </h3>
                <input
                  className="col-6 p-3 text-center"
                  placeholder="00/00/0000"
                  maxLength={10}
                  onKeyPress={(event) => {
                    if (/([A-z])/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
              <div>
                {/* Aqui é a refatoração encessária a depender da respota da API */}
                <h3 className="py-3">
                  <strong>Slide final</strong>
                </h3>
                <h4 className="pb-3">
                  Não sabe seu saldo FGTS? <a href="/">Clique aqui.</a>
                </h4>
                <input className="col-6 p-3 text-center" placeholder="R$0,00" />
              </div>
            </Slider>

            <div className="pb-2">
              <button
                className="btn btn-primary p-2 rounded-3"
                onClick={() => checkOptions()}
              >
                <strong>{currentSlide >= 2 ? "Reiniciar" : "Avançar"}</strong>
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
