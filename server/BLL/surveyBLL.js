const surveyDAL = require("../DAL/surveyDAL");

const getsurvey = async () => {
  const survey = await surveyDAL.getSurveyJSON();
  return survey;
};

const getQuestionById = async (id) => {
  const survey = await surveyDAL.getSurveyJSON();
  const question = survey.find((question) => question.id === +id);
  return question;
};

const createQuestion = async (obj) => {
  const survey = await surveyDAL.getSurveyJSON();
  survey.push(obj);
  const res = await surveyDAL.setSurveyJSON(survey);
  return res;
};

const updateQuestion = async (id, obj) => {
  const survey = await surveyDAL.getSurveyJSON();
  const question = survey.find((question) => question.id === +id);
  if (question) {
    Object.entries(obj).forEach(([key]) => {
      question[key] = obj[key];
    });
    const res = await surveyDAL.setSurveyJSON(survey);
    return res;
  } else {
    return "No such id...";
  }
};

const deleteQuestion = async (id) => {
  const survey = await surveyDAL.getSurveyJSON();
  const index = survey.findIndex((survey) => survey.id === +id);
  if (index >= 0) {
    survey.splice(index, 1);
    const res = await surveyDAL.setSurveyJSON(survey);
    return res;
  } else {
    const res = "No such question..";
    return res;
  }
};

module.exports = {
  getsurvey,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
