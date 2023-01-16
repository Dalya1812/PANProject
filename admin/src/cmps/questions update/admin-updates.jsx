import React, { useEffect, useState } from "react";
import {

  numbers,
  getAllDb,
} from "../../services/firebase.db";

export const Authenticated = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [selectedAnswers, setSelectedAnswers] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    loadDb();
  }, []);

  const loadDb = async () => {
    const data = await getAllDb();
    setData(data);
    console.table("databaseAdmin", data);
  };

  const onSelectChange = (event) => {
    const { value } = event.target;
    setSelectedNumber(value);
  };

  const onInputChange = (event) => {
    setSelectedQuestion(event.target.value);
    setSelectedAnswers(event.target.value);
  };

  const onValidate = () => {
    const question = data[selectedNumber].question;
    const answers = data[selectedNumber].answers;
    setSelectedQuestion(question);
    setSelectedAnswers(answers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(selectedQuestion);
    // console.log(selectedAnswers);
  };

  return (
    <div>
      <div className="auth-title">Hello Admin 👋</div>

      <form onSubmit={handleSubmit}>
        <label className="underlined" htmlFor="questions">
          Choose a question number :
        </label>
        <select onChange={onSelectChange} id="questions">
          <option>Select a question</option>
          {numbers.map((number) => (
            <option value={number - 1} key={number}>
              {number}
            </option>
          ))}
        </select>
        <button
          className="validate-btn"
          onClick={() => onValidate(selectedNumber)}
        >
          Validate
        </button>

        <label className="underlined" htmlFor="input-q">
          Modify your question here :
        </label>
        <input
          className="input-result"
          type="text"
          id="input-q"
          placeholder="Type your question..."
          value={selectedQuestion}
          onChange={onInputChange}
        />
        <br />

        <label className="underlined" htmlFor="input-q">
          Modify your answers here :
        </label>
        <br />

        {selectedNumber &&
          data[selectedNumber].answers.map((obj) => (
            <section>
                
              <label htmlFor="input-q" className="label-for-answers">Answer:</label>
              <input
                className="input-result"
                type="text"
                id="input-q"
                placeholder="Type your response..."
                key={obj.answer}
                value={obj.answer}
                onChange={onInputChange}
              />

              <label htmlFor="input-a" className="label-for-answers">Points:</label>
              <input
                className="input-result-points"
                type="text"
                id="input-a"
                placeholder="Type your response..."
                key={obj.points}
                value={obj.points}
                onChange={onInputChange}
              />
            </section>
          ))}

        <button className="form-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
