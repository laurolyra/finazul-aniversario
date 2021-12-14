import React, { useState, useRef } from "react";
import "./styles.css";
import mobile from "./mobile.png";
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
    <div className="how-to-container py-4">
      <div className="container">
        <h2 className="previous-text pb-3">Como fazer</h2>

        <div className="row pb-3">
          <div className="shadow-box m-auto p-2">
            <div className="container justify-content-center d-flex">
              <div className="col-7">
                <img src={mobile} alt="telefone" />
              </div>
              <div className="instructions col-5 d-flex flex-column justify-content-around">
                <Slider {...settings} ref={sliderRef}>
                  <div>
                    <h3>
                      <strong>1 -</strong> Após ter optado pelo saque
                      aniversário, autorize a consulta dos bancos
                    </h3>
                  </div>
                  <div>
                    <h3><strong>2 -</strong> Selecione a opção Saque-Aniversário</h3>
                  </div>
                  <div>
                    <h3><strong>3 -</strong> Adicione uma instituição financeira</h3>
                  </div>
                  <div>
                    <h3><strong>4 -</strong> Procure por Banco PAN</h3>
                  </div>
                  <div>
                    <h3><strong>5 -</strong> Confirme a seleção</h3>
                  </div>
                  <div>
                    <h3><strong>6 -</strong> Tudo ok</h3>
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
                  <button className="button rounded-circle" onClick={next}>
                    &#x2192;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center video-container how-to-block py-4">
          <h3 className="col-7">
            Assista nosso vídeo e conheça mais sobre a antecipação do
            Saque-Aniversário FGTS
          </h3>
          <div className="video-box position-relative">
            <div className="pt-2">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/EZR2LVXW-HY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="row justify-content-center">
            <div className="col-7">
              <h3> Conheça alguns dos nossos parceiros</h3>
            </div>
            <div className="col-7 pb-2">
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
