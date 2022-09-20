const foodGroupDAL = require("../DAL/foodGroupDAL");

const getFoodGroups = async () => {
  const foodGroups = await foodGroupDAL.getGroupsJSON();
  return foodGroups;
};

const getFoodGroupById = async (id) => {
  const foodGroups = await foodGroupDAL.getGroupsJSON();
  const foodGroup = foodGroups.find((foodGroup) => foodGroup.id === +id);
  return foodGroup;
};

const updateFoodGroup = async (id, obj) => {
  const foodGroups = await foodGroupDAL.getGroupsJSON();
  const foodGroup = foodGroups.find((foodGroup) => foodGroup.id === +id);
  if (question) {
    Object.entries(obj).forEach(([key]) => {
      foodGroup[key] = obj[key];
    });
    const res = await foodGroupDAL.setGroupsJSON(foodGroup);
    return res;
  } else {
    return "No such id...";
  }
};

module.exports = {
  getFoodGroups,
  getFoodGroupById,
  updateFoodGroup,
};
