const jf = require("jsonfile");

const getGroupsJSON = () => {
  return new Promise((resolve, reject) => {
    jf.readFile(__dirname + "/../DATA/foodGroups.json", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const setGroupsJSON = (obj) => {
  return new Promise((resolve, reject) => {
    jf.writeFile(__dirname + "/../DATA/foodGroups.json", obj, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("survey JSONfile updated successfully!");
      }
    });
  });
};

module.exports = {
  getGroupsJSON,
  setGroupsJSON,
};
