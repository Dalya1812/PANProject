const express = require("express");
const router = express.Router();
const bll = require("../BLL/surveyBLL");

router.get("/", async (req, res) => {
  try {
    const survey = await bll.getsurvey();
    res.send(survey);
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const question = await bll.getQuestionById(req.params.id);
    res.send(question);
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await bll.createQuestion(req.body);
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const data = await bll.updateQuestion(req.params.id, req.body);
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await bll.deleteQuestion(req.params.id);
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
