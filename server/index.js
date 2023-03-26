const PORT = 8000

const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors());
app.use(express.json())

const surveyRouter = require("./routes/survey");
app.use("/api/survey", surveyRouter);

const foodGroupRouter = require("./routes/foodGroup");
app.use("/api/foodGroup", foodGroupRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))