const { Model } = require("objection");

class ShipmentMode extends Model {
  static get tableName() {
    return "shipment_modes";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],

      properties: {
        id: { type: "integer" },
        name: { type: "string" },
      },
    };
  }
}

module.exports = ShipmentMode;
