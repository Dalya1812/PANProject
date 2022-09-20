import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../context";

function FoodGroup({ i, cssClass }) {
  const navigate = useNavigate();
  const { value1, value2 } = useContext(Context);
  const [groups] = value1;
  const [images] = value2;

  const play = (num) => {
    navigate("/DoctorTips", { state: num });
  };

  return (
    <button className={cssClass} onClick={() => play(groups[i].num)}>
      <img src={images[i]} alt="undefined" width="69.29" height="60" />
      <span>{groups[i].foodGroup}</span>
    </button>
  );
}

export default FoodGroup;
