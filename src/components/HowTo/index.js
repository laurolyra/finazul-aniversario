import React, { useState, useRef } from "react";
import "./styles.css";
import step01 from "./01.png";
import step02 from "./02.jpg";
import step03 from "./03.jpg";
import step04 from "./04.jpg";
import step05 from "./05.jpg";
import step06 from "./06.jpg";
import Slider from "react-slick";
import bancoPan from "./banco-pan.png";
import cetelem from "./cetelem.png";
import bmg from "./bmg.png";
import itau from "./itau.png";
import ole from "./ole.png";

const HowTo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const sliderRef = useRef();

  const next = () => {
    setCurrentSlide(currentSlide + 1);
    sliderRef.current.slickNext();
  };

  const previous = () => {
    setCurrentSlide(currentSlide - 1);
    sliderRef.current.slickPrev();
  };

  return (
    <div className="how-to-container py-4" id="how-to">
      <div className="container">
        <div className="container col-md-10">
          <h2 className="previous-text pb-3">Como fazer</h2>

          <div className="row pb-3">
            <div className="shadow-box m-auto p-2">
              <div className="container p-0 px-md-2 justify-content-center d-flex">
                <div className="col-6 col-md-5">
                  <img
                    src={step01}
                    className={currentSlide !== 0 && "d-none"}
                    alt="passo 01"
                  />
                  <img
                    src={step02}
                    className={currentSlide !== 1 && "d-none"}
                    alt="passo 02"
                  />
                  <img
                    src={step03}
                    className={currentSlide !== 2 && "d-none"}
                    alt="passo 03"
                  />
                  <img
                    src={step04}
                    className={currentSlide !== 3 && "d-none"}
                    alt="passo 04"
                  />
                  <img
                    src={step05}
                    className={currentSlide !== 4 && "d-none"}
                    alt="passo 05"
                  />
                  <img
                    src={step06}
                    className={currentSlide !== 5 && "d-none"}
                    alt="passo 06"
                  />
                </div>
                <div className="instructions col-6 col-md-7 d-flex flex-column justify-content-center">
                  <Slider {...settings} ref={sliderRef}>
                    <div>
                      <h3>
                        <strong>1 -</strong> Após ter optado pelo saque
                        aniversário, autorize a consulta dos bancos
                      </h3>
                    </div>
                    <div>
                      <h3>
                        <strong>2 -</strong> Selecione a opção Saque-Aniversário
                      </h3>
                    </div>
                    <div>
                      <h3>
                        <strong>3 -</strong> Adicione uma instituição financeira
                      </h3>
                    </div>
                    <div>
                      <h3>
                        <strong>4 -</strong> Procure por Banco PAN
                      </h3>
                    </div>
                    <div>
                      <h3>
                        <strong>5 -</strong> Confirme a seleção
                      </h3>
                    </div>
                    <div>
                      <h3>
                        <strong>6 -</strong> Tudo ok
                      </h3>
                    </div>
                  </Slider>
                  <div className="row justify-content-center">
                    <button
                      className="button rounded-circle"
                      onClick={previous}
                      disabled={currentSlide === 0}
                    >
                      &#x2190;
                    </button>
                    <button
                      className="button rounded-circle"
                      onClick={next}
                      disabled={currentSlide === 5}
                    >
                      &#x2192;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container video-container py-5">
          <div className="col-md-6 m-auto">
            <h3 className="mb-2 mb-md-5 mt-md-4">
              Assista nosso vídeo e conheça mais sobre a antecipação do
              Saque-Aniversário FGTS
            </h3>
          </div>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/EZR2LVXW-HY"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="row justify-content-center brand-block">
          <div className="row justify-content-center">
            <div>
              <h2> Conheça alguns dos nossos parceiros</h2>
            </div>
            <div className="pb-2">
              <h4>
                Trabalhamos com os melhores bancos de forma direta e indireta
                para você ter o melhor empréstimo
              </h4>
            </div>
          </div>

          <div className="row justify-content-around image-line">
            <img className="pb-2" src={ole} alt="banco pan" />
            <img className="pb-2" src={itau} alt="banco pan" />
            <img className="pb-2" src={bancoPan} alt="banco pan" />
            <img className="pb-2" src={cetelem} alt="banco pan" />
            <img className="pb-2" src={bmg} alt="banco pan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
