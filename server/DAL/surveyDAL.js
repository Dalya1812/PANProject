const jf = require("jsonfile");

const getSurveyJSON = () => {
  return new Promise((resolve, reject) => {
    jf.readFile(__dirname + "/../DATA/survey.json", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const setSurveyJSON = (obj) => {
  return new Promise((resolve, reject) => {
    jf.writeFile(__dirname + "/../DATA/survey.json", obj, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("survey JSONfile updated successfully!");
      }
    });
  });
};

module.exports = {
  getSurveyJSON,
  setSurveyJSON,
};
