import light from "../logos/light.png";
import { nanoid } from "nanoid";

function Tips({ title, tips }) {
  const getSubHighlights = (index) => {
    return tips[index].subTip.map((subTip) => {
      return (
        <div key={nanoid()} className="div-subTip">
          <li>
            <span>{subTip}</span>
          </li>
        </div>
      );
    });
  };

  const showTips = tips.map((tip, index) => {
    if (tip.subTip) {
      const showSubTip = getSubHighlights(index);
      return (
        <li key={nanoid()}>
          <span>{tip.tip}</span>
          <ul className="ul-subTip">{showSubTip}</ul>
        </li>
      );
    }
    return (
      <li key={nanoid()}>
        <span>{tip.tip}</span>
      </li>
    );
  });

  return (
    <div className="div-Tips">
      <div className="div-div-Tips">
        <img
          src={light}
          alt="undefined"
          width="22"
          height="35"
          className="d-inline-block align-top"
        />
        <span className="span-Tips">{title}</span>
      </div>
      <ul>{showTips}</ul>
    </div>
  );
}

export default Tips;
