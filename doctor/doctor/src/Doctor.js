import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/images/logo.png";

const validateScore = (score) => {
  let veg, beans, meat, junk;
  [veg, beans, meat, junk] = score.split("");
  let topics = [
    [veg, 1],
    [beans, 2],
    [meat, 3],
    [junk, 4],
  ];
  topics = topics.sort();
  let urgent1 = topics[0];
  let urgent2 = topics[1];
  if (urgent1 === urgent2) {
    let MessageNumber = urgent1[1] < urgent2[1] ? urgent1[1] : urgent2[1];
    return MessageNumber;
  }
  return urgent1[1];
};
const validScore = validateScore.bind(this);
const Doctor = () => {
  const [score, SetScore] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="paragraph">
          ,נא להזין את המספר בעל 4 הספרות שהתקבל במילוי השאלון
        </p>
        <p className="paragraph">
          בהתאם למספר זה יופיעו הנושא וההמלצות שיתאימו למטופל/ת שמילא/ה את
          השאלון
        </p>
      </header>
      <form
        onSubmit={(e) => {
          console.log(score);
          console.log(parseInt(score));

          if (
            parseInt(score) === undefined ||
            isNaN(parseInt(score)) ||
            parseInt(score) === 0
          ) {
            alert("מספר לא חוקי");
            return 0;
          } else if (parseInt(score) < 1000 || parseInt(score) > 9999) {
            alert("נא להזין מספר בן 4 ספרות");
            return 0;
          }

          let message = validScore(score);
          console.log(message);

          navigate("/DoctorTips", { state: message });
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="inpt"
          onChange={(e) => SetScore(e.target.value)}
        ></input>
        <button className="btn">הבא</button>
      </form>
    </div>
  );
};
export default Doctor;
