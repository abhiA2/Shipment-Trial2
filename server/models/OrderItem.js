const { Model } = require("objection");

class OrderItem extends Model {
  static get tableName() {
    return "order_items";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["orderId", "productName", "sku", "hsn", "qty", "unitPrice"],

      properties: {
        id: { type: "integer" },
        productName: { type: "string" },
        sku: { type: "string" },
        hsn: { type: "string" },
        qty: { type: "integer" },
        unitPrice: { type: "number" },
      },
    };
  }

  static get relationMappings() {
    const Order = require("./Order");
    return {
      order: {
        relation: Model.BelongsToOneRelation,
        modelClass: Order,
        join: {
          from: "order_items.orderId",
          to: "orders.id",
        },
      },
    };
  }
}

module.exports = OrderItem;
