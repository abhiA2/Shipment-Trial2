const { Model } = require("objection");

class ShippingPartner extends Model {
  static get tableName() {
    return "shipping_partners";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "serviceArea"],

      properties: {
        id: { type: "integer" },
        name: { type: "string" },
      },
    };
  }
  static getShippingPartners() {
    return this.query();
  }
}

module.exports = ShippingPartner;
