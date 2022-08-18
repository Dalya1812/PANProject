import { useState } from "react";
import Axios from "axios";
import "./Survey.css";
import { useEffect } from "react";
import food from "../../assets/images/food.png";
import startImg from "../../assets/images/start.png";
import veggiFruits from "../../assets/images/veggiFruit.png";
import QuestionPage from "./QuestionPage";

const sections = ["veg", "beans", "meat", "processed"];
export default function Survey() {
  const [showingSection, setShowingSection] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchSurvey = () => {
      Axios.get("http://localhost:8000/api/survey").then((res) => {
        setQuestions(res.data);
      });
    };
    fetchSurvey();
  }, []);

  function answerSelected(section, selectedAnswer) {
    // section
    console.log(selectedAnswer.points);
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
    if (showingSection === sections.length - 1) return;
    setShowingSection(showingSection + 1);
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
      <button className="buttonMovingLeft" onClick={nextSection}>
        Next
      </button>
    </div>
  );
}
