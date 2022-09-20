import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AdditionalFoodGroups from "./AdditionalFoodGroups";
import MoreHighlights from "./MoreHighlights";
import Tip from "./Tip";
import Tips from "./Tips";
import Title from "./Title";
import Why from "./Why";
import images from "./ImagesFoodGroups";
//import foodGroups from "./foodGroups.json";
import NavbarComp from "../navbar/NavbarComp";
import Context from "../../context";
import axios from "axios";

const url = "http://localhost:8000/api/foodGroup";

function DoctorTips() {
  const location = useLocation();
  const [foodGroups, setFoodGroup] = useState([]);

  useEffect(() => {
    async function getFoodGroups() {
      const data = (await axios.get(url)).data;
      setFoodGroup(data);
    }
    getFoodGroups();
  }, []);

  return foodGroups.length > 0 ? (
    <Context.Provider
      value={{
        value1: [foodGroups[location.state - 1].groups],
        value2: [images[location.state - 1].imgGroups],
      }}
    >
      <div className="div-DoctorTips">
        <NavbarComp />
        <div className="div-result">
          <div className="div-div-result">
            <Title
              title={foodGroups[location.state - 1].title}
              image={images[location.state - 1].img}
              width="133.97"
              height="116"
            />
            <Tip tip={foodGroups[location.state - 1].tip} />
            <br />
            <div className="div-body">
              <div>
                <Tips
                  title="טיפים ורעיונות"
                  tips={foodGroups[location.state - 1].tips}
                />
                <MoreHighlights
                  highlights={foodGroups[location.state - 1].highlights}
                />
              </div>
              <div className="div-Why-AdditionalFoodGroups">
                <Why answer={foodGroups[location.state - 1].answer} />
                <AdditionalFoodGroups />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  ) : null;
}

export default DoctorTips;
