const express = require("express");
const router = express.Router();
const bll = require("../BLL/foodGroupBLL");

router.get("/", async (req, res) => {
  try {
    const foodGroups = await bll.getFoodGroups();
    res.send(foodGroups);
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const foodGroup = await bll.getFoodGroupById(req.params.id);
    res.send(foodGroup);
  } catch (err) {
    res.send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const data = await bll.updateFoodGroup(req.params.id, req.body);
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
