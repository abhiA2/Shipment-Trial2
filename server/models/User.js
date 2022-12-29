const { Model } = require("objection");
const bcrypt = require("bcrypt");
class User extends Model {
  static get tableName() {
    return "users";
  }
  async $beforeInsert(queryContext) {
    await super.$beforeInsert(queryContext);

    // Hash the user's password before inserting the user into the database.
    this.password = await bcrypt.hash(this.password, 10);
  }
  // Find a user by their email.
  static async findByEmail(email) {
    return this.query().where({ email }).first();
  }

  // Validate a user's password.
  async validatePassword(password) {
    return bcrypt.compare(password, this.password);
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "firstName",
        "lastName",
        "mobileNumber",
        "email",
        "password",
        "accountType",
      ],

      properties: {
        id: { type: "integer" },
        firstName: { type: "string" },
        lastName: { type: "string" },
        mobileNumber: { type: "string" },
        email: { type: "string" },
        password: { type: "string" },
        accountType: { type: "string", enum: ["personal", "business"] },
      },
    };
  }
  static get relationMappings() {
    const UserPickupAddress = require("./UserPickupAddress");
    const UserBillingAddress = require("./UserBillingAddress");
    return {
      pickupAddress: {
        relation: Model.HasOneRelation,
        modelClass: UserPickupAddress,
        join: {
          from: "users.id",
          to: "user_pickup_addresses.userId",
        },
      },
      billingAddress: {
        relation: Model.HasOneRelation,
        modelClass: UserBillingAddress,
        join: {
          from: "users.id",
          to: "user_billing_addresses.userId",
        },
      },

      // addresses: {
      //   relation: Model.MorphManyRelation,
      //   modelClass: UserAddress,
      //   join: {
      //     from: "users.id",
      //     to: "addresses.user_id",
      //     extra: ["type"],
      //   },
      // },
    };
  }

  static async updateAddress({ billingAddress, pickupAddress, userId }) {
    const trx = await User.startTransaction();

    try {
      const user = await User.query(trx).upsertGraph({
        id: userId,
        billingAddress,
        pickupAddress,
      });
      await trx.commit();
      return user;
    } catch (err) {
      await trx.rollback();
      console.log(err);
      throw err;
    }
  }
}

module.exports = User;
