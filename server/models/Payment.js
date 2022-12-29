const { Model } = require("objection");

class Payment extends Model {
  static get tableName() {
    return "payments";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["orderId", "amount"],

      properties: {
        id: { type: "integer" },
        orderId: { type: "integer" },
        amount: { type: "number" },
      },
    };
  }

  static get relationMappings() {
    return {
      order: {
        relation: Model.BelongsToOneRelation,
        modelClass: Order,
        join: {
          from: "payments.orderId",
          to: "orders.id",
        },
      },
    };
  }
}

module.exports = Payment;
