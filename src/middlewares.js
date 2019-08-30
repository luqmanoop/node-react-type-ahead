const cors = require("cors");

module.exports = (app, countries = []) => {
  app.use(cors());
  app.use((req, res, next) => {
    req.countries = countries;
    next();
  });
};
