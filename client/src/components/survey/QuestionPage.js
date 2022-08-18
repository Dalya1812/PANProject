import React, { useEffect, useState } from "react";
import Question from "./Question";
const randomKey = () => Math.random() * 10000 + "";

const questionsForSection = (section) => {
  switch (section) {
    case "veg":
      return [1, 2];
    case "beans":
      return [3, 4];
    case "meat":
      return [5, 6];
    case "processed":
      return [7, 8];
  }
};
export default function QuestionPage({ section, questions, answerSelected }) {
  function determineQuestions() {
    const [q1_id, q2_id] = questionsForSection(section);
    const q1 = questions.find((q) => q.id === q1_id);
    const q2 = questions.find((q) => q.id === q2_id);

    return (
      <React.Fragment>
        <Question
          key={randomKey()}
          questionData={q1}
          answerSelected={(selectedAnswer) =>
            answerSelected(section, selectedAnswer)
          }
        />
        <Question
          key={randomKey()}
          questionData={q2}
          answerSelected={(selectedAnswer) =>
            answerSelected(section, selectedAnswer)
          }
        />
      </React.Fragment>
    );
  }
  return <div className="question_page">{determineQuestions()}</div>;
}
