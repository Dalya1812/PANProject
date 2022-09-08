import { useState } from "react";
import Axios from "axios";
import "./Survey.css";
import { useEffect } from "react";
import startImg from "../../assets/images/start.png";
import vegIcon from "../../assets/images/carot.png";
import colaIcon from "../../assets/images/cola.png";
import beanIcon from "../../assets/images/beans.png";
import hamburIcon from "../../assets/images/hamburger.png";
import QuestionPage from "./QuestionPage";
import ResultComp from "../resultComp";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

const sections = ["start", "veg", "beans", "meat", "processed", "results"];
export default function Survey(props) {
  const [showingSection, setShowingSection] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [clientResult, setResults] = useState([0, 0, 0, 0]);
  const [queResult, setqueResults] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [showSurvey, setShowSurvey] = useState(["true"]);
  const cheakSurv = () => {
    setShowSurvey(false);
  };

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
    if (showingSection === sections.length - 1) {
    }
    setShowingSection(showingSection + 1);
  }
  function prvSection() {
    if (showingSection === 0) return;
    setShowingSection(showingSection - 1);
  }

  function getShowingBackButton() {
    if (showingSection > 0 && showingSection < sections.length - 1) {
      return (
        <button className="button-back" onClick={prvSection}>
          <BsChevronRight className="arrow" />
        </button>
      );
    }
  }
  function getClientSurvey() {
    clientResult[0] = queResult[0] + queResult[1];
    clientResult[1] = queResult[2] + queResult[3];
    clientResult[2] = queResult[4] + queResult[5];
    clientResult[3] = queResult[6] + queResult[7];

    return clientResult;
  }
  function myFunction() {
    cheakSurv();
    nextSection();
  }
  function getResults() {
    return clientResult;
  }
  function getShowingEndButton() {
    if (showingSection == sections.length - 2) {
      return (
        <div>
          <button className="button-end arrow" onClick={myFunction}>
            סיום
          </button>
        </div>
      );
    }
  }

  function check() {
    if (showSurvey === false) {
      console.log("hwlllooo im in the right place");
      return <ResultComp getClientSurvey={clientResult} />;
    }
  }
  function getShowingNextButton() {
    if (showingSection >= 0 && showingSection < sections.length - 2) {
      return (
        <button className="button-forward" onClick={nextSection}>
          <BsChevronLeft className="arrow" />
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
            {showingSection >= 1 && <img src={vegIcon} alt="" />}
          </div>
          <div className="time-line-circle">
            {showingSection >= 2 && <img src={beanIcon} alt="" />}
          </div>
          <div className="time-line-circle">
            {showingSection >= 3 && <img src={hamburIcon} alt="" />}
          </div>
          <div className="time-line-circle">
            {showingSection >= 4 && <img src={colaIcon} alt="" />}
          </div>
        </div>
        <hr className="line" />
      </div>
      {check()}
      <div className="showing_section_survey">{getShowingElement()}</div>
      <div className="buttons">{getShowingNextButton()}</div>
      <div className="buttons">{getShowingEndButton()}</div>
      <div className="buttons">{getShowingBackButton()}</div>
    </div>
  );
}
