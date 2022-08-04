const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const surveyRouter = require("./routes/survey");
app.use("/api/survey", surveyRouter);

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
