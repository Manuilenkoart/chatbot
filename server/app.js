require("dotenv").config();
require("./db/mongoConnect");
const { PORT } = require("./config");

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/apiRoutes/apiRoutes");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../build")));
app.use("/", apiRoutes);

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

module.exports = app;
