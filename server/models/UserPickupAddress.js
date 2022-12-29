const { Model } = require("objection");

class UserPickupAddress extends Model {
  static get tableName() {
    return "user_pickup_addresses";
  }

  static get relationMappings() {
    const User = require("./User");

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "user_pickup_addresses.userId",
          to: "users.id",
        },
      },
    };
  }
}

module.exports = UserPickupAddress;
