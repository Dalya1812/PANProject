import { nanoid } from "nanoid";
import { useState } from "react";
import { BsChevronUp } from "react-icons/bs";

function MoreHighlights({ highlights }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const getSubHighlights = (index) => {
    return highlights[index].subHighlight.map((subHighlight) => {
      return (
        <li key={nanoid()} className="li-MoreHighlights">
          <span>{subHighlight}</span>
        </li>
      );
    });
  };

  const showHighlights = highlights.map((highlight, index) => {
    if (highlight.subHighlight) {
      const showSubHighlight = getSubHighlights(index);
      return (
        <li key={nanoid()}>
          <span>{highlight.highlight}</span>
          <ul>{showSubHighlight}</ul>
        </li>
      );
    }
    return (
      <li>
        <span>{highlight.highlight}</span>
      </li>
    );
  });

  return (
    <div className={!show ? "div-MoreHighlights" : "div-check"}>
      <div>
        <span>עוד דגשים</span>
        <button onClick={handleClick}>
          <BsChevronUp className={show ? "arrowDown" : "arrowUp"} />
        </button>
      </div>
      {show ? <ul>{showHighlights}</ul> : null}
    </div>
  );
}
export default MoreHighlights;
