import startPic from "../../assets/images/startSurvey.png";
import Intrudection from "./intruduction.json";

export default function Start() {
  return (
    <div>
      <div className="textInto">
        {" "}
        {Intrudection.start} <br />
        {Intrudection.intrudection}{" "}
      </div>
      <img src={startPic} className="iconFirstPage" alt="" />
    </div>
  );
}
