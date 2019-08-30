const express = require("express");
const path = require("path");

const registerMiddlewares = require("./middlewares");
const registerRoutes = require("./routes");
const CountriesReader = require("./countriesReader");

const app = express();
const PORT = process.env.PORT || 5000;

const COUNTRIES_DATA_PATH = path.resolve(__dirname, "data/countries.txt");

let countries = [];
(async () => {
  countries = await CountriesReader.read(COUNTRIES_DATA_PATH);

  registerMiddlewares(app, countries);
  registerRoutes(app);
})();

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
