class CountriesController {
  static getCountries(req, res) {
    const { q } = req.query;
    const countries = req.countries;
    const filteredCountries = countries.filter(country => {
      return country.toLowerCase().includes(q.toLowerCase());
    });
    res.send(filteredCountries);
  }
}

module.exports = CountriesController;
