import FoodGroup from "./FoodGroup";

function AdditionalFoodGroups() {
  return (
    <div className="div-Additional">
      <div className="div-AdditionalGroups">קבוצות מזון נוספות:</div>
      <FoodGroup i={0} cssClass={"div-First-Foods"} />
      <FoodGroup i={1} cssClass={"div-Foods"} />
      <FoodGroup i={2} cssClass={"div-Foods"} />
    </div>
  );
}

export default AdditionalFoodGroups;
