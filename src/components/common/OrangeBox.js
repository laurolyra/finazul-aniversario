import React from "react";
import orangeBoxArrow from "./orange-box-arrow.png";
import "./styles.css";

const OrangeBox = ({ body = true }) => (
  <div className="orange-box">
    <a href="#calc-box" className="text-decoration-none">
      <div className="py-2 d-flex align-items-center justify-content-center">
        {body ? (
          <>
            <h2 className="py-2 mb-0 text-center">
              Antecipe já!
            </h2>
            <img src={orangeBoxArrow} alt="veja mais" />
          </>
        ) : (
          <>
            <h2 className="py-2 mb-0 text-center">
              Simule já!
            </h2>
            <img src={orangeBoxArrow} alt="veja mais" />
          </>
        )}
      </div>
    </a>
  </div>
);

export default OrangeBox;
