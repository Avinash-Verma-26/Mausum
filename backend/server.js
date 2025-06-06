const express = require("express");

require("dotenv").config();
const app = express();
const port = 3000;

const forecastRoute = require("./routes/forecast");

app.use("/api/forecast", forecastRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
