const express = require("express");
const { WebCEngine } = require("../../index.js");

const app = express();
app.engine("webc", WebCEngine);
app.set("view engine", "webc");

app.get("/", async (request, response) => {
  response.render("index");
});

app.listen(8080, () => {
  console.log("Application running at http://localhost:8080");
});
