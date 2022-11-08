import startPic from "../../assets/images/startSurvey.png";
import Introduction from "./introduction.json";

export default function Start() {
  return (
    <div>
      <div className="textInto">
        {" "}
        {Introduction.start} <br />
        {Introduction.introduction}{" "}
      </div>
      <img src={startPic} className="iconFirstPage" alt="" />
    </div>
  );
}
