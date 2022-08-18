import React from "react";

export default function Question({ questionData, answerSelected }) {
  return (
    <div className="question_container">
      <h3 className="question_header">{questionData.question}</h3>
      <ul className="answer_list">
        {questionData.answers.map((answerData) => (
          <li
            className="answer_item"
            key={answerData.answer + answerData.points}
          >
            <input
              type="radio"
              name={questionData.question}
              onChange={() => answerSelected(answerData)}
            />
            <span>{answerData.answer}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
