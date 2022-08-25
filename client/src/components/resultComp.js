import { useState } from "react";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import "./resultComp.css";
import "./survey/Survey";
import "./survey/results.json";

function ResultComp({ getClientSurvey }) {
  let [clientResult, setResults] = useState([0, 0, 0, 0]);

  const back = () => {};
  const data = getClientSurvey;
  console.log(data + "data");

  return (
    <div className="div-result">
      <div className="div-result-in">
        <div className="div-result-in-in">
          <span className="span-result">התוצאות שהתקבלו:</span> <br />
          <br />
          <span className="span-num">{getClientSurvey} </span>
          <br />
          <br />
          <div className="div-rec">
            <span>
              בהתאם לנתונים שמילאת, מומלץ לשים דגש על נושא הפירות והירקות
            </span>
          </div>
        </div>
      </div>
      <button className="button-back" onClick={back}>
        <BsChevronRight className="arrow" />
      </button>
    </div>
  );
  function displayTip() {
    console.log(clientResult.length);
    for (let i = 0; i < clientResult.length; i++) {
      console.log(clientResult[i] + "ds");
    }
  }
}

export default ResultComp;
