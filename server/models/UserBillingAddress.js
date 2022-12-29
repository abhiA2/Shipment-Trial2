const { Model } = require("objection");

class UserBillingAddress extends Model {
  static get tableName() {
    return "user_billing_addresses";
  }

  static get relationMappings() {
    const User = require("./User");

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "user_billing_addresses.userId",
          to: "users.id",
        },
      },
    };
  }
}

module.exports = UserBillingAddress;
