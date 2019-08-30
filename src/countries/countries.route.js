const express = require("express");
const router = express.Router();

const CountriesController = require("./countries.controller");

router.get("/", CountriesController.getCountries);

module.exports = router;
