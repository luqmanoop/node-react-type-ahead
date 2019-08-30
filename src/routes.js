const countriesRoute = require('./countries/countries.route');

module.exports = app => {
    app.get('/', (req, res) => res.send('Countries TypeAhead'))
    app.use('/countries', countriesRoute);
}