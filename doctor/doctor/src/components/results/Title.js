function Title({ title, image, width, height }) {
  return (
    <div className="div-Title">
      <div>
        <img
          src={image}
          alt="undefined"
          width={width}
          height={height}
          className="d-inline-block align-top"
        />
        <span>{title}</span>
      </div>
    </div>
  );
}

export default Title;
