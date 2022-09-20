import cloud from "../logos/cloud.png";

function Why({ answer }) {
  return (
    <div className="div-Why">
      <div className="div-div-Why">
        <div>
          <img
            src={cloud}
            alt="undefined"
            width="37"
            height="23"
            className="d-inline-block align-top"
          />{" "}
          למה?
        </div>
        <p>{answer}</p>
        <br />
      </div>{" "}
    </div>
  );
}

export default Why;
