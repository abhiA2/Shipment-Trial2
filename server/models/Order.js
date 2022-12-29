const { Model } = require("objection");

class Order extends Model {
  static get tableName() {
    return "orders";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "logisticFee",
        "tax",
        "total",
        "shippingPartnerId",
        "shipmentModeId",
        "billedWeight",
        "userId",
      ],

      properties: {
        id: { type: "integer" },
        logisticFee: { type: "number" },
        tax: { type: "number" },
        total: { type: "number" },
        shippingPartnerId: { type: "integer" },
        shipmentModeId: { type: "integer" },
        billedWeight: { type: "number" },
        userId: { type: "integer" },
        status: {
          type: "string",
          enum: [
            "draft",
            "packed",
            "manifested",
            "dispatched",
            "received",
            "cancelled",
            "disputes",
          ],
        },
      },
    };
  }

  static get relationMappings() {
    const User = require("./User");
    const OrderDeliveryAddress = require("./OrderDeliveryAddress");
    const OrderPickupAddress = require("./OrderPickupAddress");
    const ShipmentMode = require("./ShipmentMode");
    const ShipmentDetails = require("./ShipmentDetails");
    const OrderItem = require("./OrderItem");

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "orders.userId",
          to: "users.id",
        },
        modify: (builder) => {
          builder.select("id", "firstName");
        },
      },
      deliveryAddress: {
        relation: Model.HasOneRelation,
        modelClass: OrderDeliveryAddress,
        join: {
          from: "orders.id",
          to: "order_delivery_addresses.orderId",
        },
      },
      pickupAddress: {
        relation: Model.HasOneRelation,
        modelClass: OrderPickupAddress,
        join: {
          from: "orders.id",
          to: "order_pickup_addresses.orderId",
        },
      },
      shipmentMode: {
        relation: Model.HasOneRelation,
        modelClass: ShipmentMode,
        join: {
          from: "orders.shipmentModeId",
          to: "shipment_modes.id",
        },
      },
      shipmentDetails: {
        relation: Model.HasOneRelation,
        modelClass: ShipmentDetails,
        join: {
          from: "orders.id",
          to: "shipment_details.orderId",
        },
      },
      items: {
        relation: Model.HasManyRelation,
        modelClass: OrderItem,
        join: {
          from: "orders.id",
          to: "order_items.orderId",
        },
      },
    };
  }
  static async getOrder(orderId) {
    return this.query().findById(orderId).withGraphFetched({
      user: true,
      deliveryAddress: true,
      pickupAddress: true,
      shipmentMode: true,
      shipmentDetails: true,
      items: true,
    });
  }

  static async createOrder(order) {
    return this.query().insertGraph(order);
  }

  static async getOrders(userId, { status = "draft" }) {
    return this.query()
      .where({ userId, status })
      .modifiers({
        getLessDetails: (query) => query.select("country", "state", "mobileNo"),
      })
      .withGraphFetched({
        user: true,
        deliveryAddress: {
          $modify: ["getLessDetails"],
        },
        pickupAddress: {
          $modify: ["getLessDetails"],
        },
        shipmentMode: true,
        shipmentDetails: true,
        items: true,
      });
  }
}

module.exports = Order;
