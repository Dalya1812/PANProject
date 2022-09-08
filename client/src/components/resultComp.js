import { useState } from "react";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import "./resultComp.css";
import "./survey/Survey";
import results from "./survey/results.json";
let result = "";

function ResultComp({ getClientSurvey }) {
  let [clientResult, setResults] = useState([0, 0, 0, 0]);
  const back = () => {};
  const data = getClientSurvey;
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
            <div>{findTipNum()}</div>
          </div>
        </div>
      </div>
    </div>
  );
  function findTipNum() {
    let minDigit = data[0];
    let lowestSub = 0;
    for (let i = 0; i < data.length; i++) {
      if (minDigit >= data[i]) {
        lowestSub = i + 1;
        minDigit = data[i];
      }
    }

    return displayTip(lowestSub);
  }

  function displayTip(lowestSub) {
    switch (lowestSub) {
      case 1:
        return JSON.stringify(results[0].tip).slice(1, -1);

      case 2:
        return JSON.stringify(results[1].tip).slice(1, -1);
      case 3:
        return JSON.stringify(results[2].tip).slice(1, -1);
      case 4:
        return JSON.stringify(results[3].tip).slice(1, -1);
    }
  }
}

export default ResultComp;
