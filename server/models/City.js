const { Model } = require("objection");

class City extends Model {
  static get tableName() {
    return "cities";
  }

  static get idColumn() {
    return "id";
  }

  static get relationMappings() {
    const Country = require("./Country");
    const State = require("./State");
    return {
      country: {
        relation: Model.BelongsToOneRelation,
        modelClass: Country,
        join: {
          from: "cities.country_id",
          to: "countries.id",
        },
      },
      state: {
        relation: Model.BelongsToOneRelation,
        modelClass: State,
        join: {
          from: "cities.state_id",
          to: "states.id",
        },
      },
    };
  }
}

module.exports = City;
