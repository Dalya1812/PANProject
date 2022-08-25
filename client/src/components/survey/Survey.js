import { useState } from "react";
import Axios from "axios";
import "./Survey.css";
import { useEffect } from "react";
import food from "../../assets/images/food.png";
import startImg from "../../assets/images/start.png";
import veggiFruits from "../../assets/images/veggiFruit.png";
import QuestionPage from "./QuestionPage";
import ResultComp from "../resultComp";
const sections = ["start", "veg", "beans", "meat", "processed", "results"];

export default function Survey() {
  const [showingSection, setShowingSection] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [clientResult, setResults] = useState([0, 0, 0, 0]);
  const [queResult, setqueResults] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const fetchSurvey = () => {
      Axios.get("http://localhost:8000/api/survey").then((res) => {
        setQuestions(res.data);
      });
    };
    fetchSurvey();
  }, []);

  function answerSelected(section, selectedAnswer, id) {
    if (queResult[id - 1] === 0) {
      queResult[id - 1] += selectedAnswer.points;
      setqueResults(queResult);
    } else {
      queResult[id - 1] *= 0;
      queResult[id - 1] += selectedAnswer.points;
      setqueResults(queResult);
    }

    getClientSurvey();
  }

  function answerdQues(section, selectedAnswer) {}
  function getShowingElement() {
    if (questions.length < 1) return null;
    return (
      <QuestionPage
        section={sections[showingSection]}
        questions={questions}
        answerSelected={answerSelected}
      />
    );
  }
  function nextSection() {
    if (showingSection === sections.length - 1) return;
    setShowingSection(showingSection + 1);
  }
  function prvSection() {
    if (showingSection === 0) return;
    setShowingSection(showingSection - 1);
  }

  function getShowingBackButton() {
    if (showingSection > 0 && showingSection < sections.length - 1) {
      return (
        <button className="buttonMovingBack" onClick={prvSection}>
          Back{" "}
        </button>
      );
    }
  }

  function getClientSurvey() {
    clientResult[0] = queResult[0] + queResult[1];
    clientResult[1] = queResult[2] + queResult[3];
    clientResult[2] = queResult[4] + queResult[5];
    clientResult[3] = queResult[6] + queResult[7];
    console.log("om end buttom and i work fine");
    console.log(clientResult);
    return clientResult;
  }

  function getResults() {
    return clientResult;
  }
  function getShowingEndButton() {
    console.log(clientResult);

    if (showingSection == sections.length - 2) {
      return (
        <button className="endButton" onClick={nextSection}>
          סיום{" "}
        </button>
      );
    } else if (showingSection == sections.length - 1) {
      return <ResultComp getClientSurvey={clientResult} />;
    }
  }

  function getShowingNextButton() {
    if (showingSection >= 0 && showingSection < sections.length - 2) {
      return (
        <button className="buttonMovingForward" onClick={nextSection}>
          {" "}
          Next
        </button>
      );
    }
  }

  return (
    <div>
      <div className="time-line">
        <div className="time-line-container">
          <div className="time-line-circle">
            {showingSection >= 0 && <img src={startImg} alt="" />}
          </div>
          <div className="time-line-circle">
            {showingSection >= 1 && <img src={food} alt="" />}
          </div>
          <div className="time-line-circle">
            {showingSection >= 2 && <img src={food} alt="" />}
          </div>
          <div className="time-line-circle">
            {showingSection >= 3 && <img src={food} alt="" />}
          </div>
          <div className="time-line-circle">
            {showingSection >= 4 && <img src={food} alt="" />}
          </div>
        </div>
        <hr />
      </div>
      <div className="showing_section_survey">{getShowingElement()}</div>
      <div className="buttons">{getShowingNextButton()}</div>
      <div className="buttons">{getShowingEndButton()}</div>
      <div className="buttons">{getShowingBackButton()}</div>
    </div>
  );
}
