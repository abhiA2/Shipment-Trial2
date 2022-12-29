const { Model } = require("objection");

class OrderDeliveryAddress extends Model {
  static get tableName() {
    return "order_delivery_addresses";
  }

  static get relationMappings() {
    const Order = require("./Order");

    return {
      order: {
        relation: Model.BelongsToOneRelation,
        modelClass: Order,
        join: {
          from: "order_delivery_addresses.orderId",
          to: "orders.id",
        },
      },
    };
  }
}

module.exports = OrderDeliveryAddress;
