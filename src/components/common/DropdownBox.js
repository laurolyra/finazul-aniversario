import React, { useState } from "react";
import "./styles.css";

const DropdownBox = ({ topic }) => {
  const [showQuestions, setShowQuestions] = useState(false);
  const { topicHeader, questions } = topic;
  console.log("topic", topicHeader);

  return (
    <div className="row justify-content-between dropdown-box align-items-center mw-75 position-relative text-start mb-3">
      <div className="col-10">
        <h2 className="py-2 m-0">{topicHeader}</h2>
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
        className="flex-column position-relative"
      >
        
        {questions.map(({question, answer, link}) => (
          <div className="text-start question-box py-2" key={question}>
            <h3>{question}</h3>
            <div>
            <h4>{answer}{' '}</h4>
            {link ?<a href={link.url}><h4>{link.text}</h4></a>: null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownBox;
