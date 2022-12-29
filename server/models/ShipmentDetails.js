const { Model } = require("objection");

class ShipmentDetails extends Model {
  static get tableName() {
    return "shipment_details";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["actualWeight", "length", "breadth", "height", "orderId"],

      properties: {
        id: { type: "integer" },
        actualWeight: { type: "number" },
        length: { type: "number" },
        breadth: { type: "number" },
        height: { type: "number" },
      },
    };
  }
}

module.exports = ShipmentDetails;
