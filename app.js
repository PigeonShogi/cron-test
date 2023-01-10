require("dotenv").config();

const express = require("express");
const router = require('./routes/index')
const app = express();
const PORT = process.env.PORT || 3456;
const job = require("./tools/schedule");

app.use(express.urlencoded({ extended: true }));
app.use(router)
// 執行排程
job.start();

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}...`);
});
