import React from "react";

const Topic = ({ imgSrc, text }) => (
  <div className="d-flex align-items-center topic justify-content-center">
    <img src={imgSrc} alt={text}/>
    <h3 className="col-9 ps-3">{text}</h3>
  </div>
);

export default Topic;
