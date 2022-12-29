const { Country, City, State } = require("../models");

class CountriesController {
  static async getCountries(req, res) {
    try {
      const countries = await Country.query()
        .select("id", "name", "iso3", "emoji")
        .orderBy("name");

      res.json(countries);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  static async getStatesByCountry(req, res) {
    try {
      const { countryId } = req.params;
      const states = await State.query()
        .select("id", "name")
        .where({ country_id: countryId })
        .orderBy("name");
      res.send(states);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  static async getCitiesByCountry(req, res) {
    try {
      const { countryId } = req.params;
      const cities = await City.query()
        .select("id", "name")
        .where({ country_id: countryId })
        .orderBy("name");

      res.json(cities);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
}

module.exports = CountriesController;
