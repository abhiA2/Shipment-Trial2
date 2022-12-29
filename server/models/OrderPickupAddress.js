const { Model } = require("objection");

class OrderPickupAddress extends Model {
  static get tableName() {
    return "order_pickup_addresses";
  }

  static get relationMappings() {
    const Order = require("./Order");

    return {
      order: {
        relation: Model.BelongsToOneRelation,
        modelClass: Order,
        join: {
          from: "order_pickup_addresses.orderId",
          to: "orders.id",
        },
      },
    };
  }
}

module.exports = OrderPickupAddress;
