const express = require("express");
const app = express();

const heathrow = require("./data/Heathrow.json");
const harrow = require("./data/Harrow.json");
const stratford = require("./data/Stratford.json");

app.get("/:city/:category", function (request, response) {
  const city = request.params.city;
  const upCity = city[0].toUpperCase() + city.substring(1);
  const category = request.params.category;
  const file = require(`./data/${upCity}.json`);
  response.send(file[category]);

});

app.listen(3000);
