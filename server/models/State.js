const { Model } = require("objection");

class State extends Model {
  static get tableName() {
    return "states";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "name",
        "country_id",
        "country_code",
        "type",
        "latitude",
        "longitude",
        "flag",
        "wikiDataId",
      ],

      properties: {
        id: { type: "integer" },
        name: { type: "string", maxLength: 255 },
        country_id: { type: "integer" },
        country_code: { type: "string", maxLength: 2 },
        fips_code: { type: "string" },
        iso2: { type: "string" },
        type: { type: "string", maxLength: 191 },
        latitude: { type: "number" },
        longitude: { type: "number" },
        flag: { type: "integer" },
        wikiDataId: { type: "string" },
      },
    };
  }

  static get relationMappings() {
    const Country = require("./Country");
    const City = require("./City");
    return {
      country: {
        relation: Model.BelongsToOneRelation,
        modelClass: Country,
        join: {
          from: "states.country_id",
          to: "countries.id",
        },
      },
      cities: {
        relation: Model.HasManyRelation,
        modelClass: City,
        join: {
          from: "states.id",
          to: "cities.state_id",
        },
      },
    };
  }
}

module.exports = State;
