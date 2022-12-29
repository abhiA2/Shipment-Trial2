const { Model } = require("objection");

class Country extends Model {
  static get tableName() {
    return "countries";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "name",
        "iso3",
        "numeric_code",
        "iso2",
        "phonecode",
        "capital",
        "currency",
        "currency_name",
        "currency_symbol",
        "tld",
        "native",
        "region",
        "subregion",
        "timezones",
        "translations",
        "latitude",
        "longitude",
        "emoji",
        "emojiU",
        "flag",
        "wikiDataId",
      ],

      properties: {
        id: { type: "integer" },
        name: { type: "string", maxLength: 100 },
        iso3: { type: "string", maxLength: 3 },
        numeric_code: { type: "string", maxLength: 3 },
        iso2: { type: "string", maxLength: 2 },
        phonecode: { type: "string" },
        capital: { type: "string" },
        currency: { type: "string" },
        currency_name: { type: "string" },
        currency_symbol: { type: "string" },
        tld: { type: "string" },
        native: { type: "string" },
        region: { type: "string" },
        subregion: { type: "string" },
        timezones: { type: "string" },
        translations: { type: "string" },
        latitude: { type: "number" },
        longitude: { type: "number" },
        emoji: { type: "string", maxLength: 191 },
        emojiU: { type: "string", maxLength: 191 },
        created_at: { type: ["string", "null"] },
        updated_at: { type: ["string", "null"] },
        flag: { type: "string", maxLength: 191 },
        wikiDataId: { type: "string", maxLength: 191 },
      },
    };
  }

  static get relationMappings() {
    const State = require("./State");

    return {
      states: {
        relation: Model.HasManyRelation,
        modelClass: State,
        join: {
          from: "countries.id",
          to: "states.country_id",
        },
      },
    };
  }

  static getCountries() {
    return this.query();
  }
}

module.exports = Country;
