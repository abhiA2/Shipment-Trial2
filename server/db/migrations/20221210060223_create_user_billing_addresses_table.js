exports.up = async function (knex) {
  await knex.schema.createTableLike(
    "user_billing_addresses",
    "user_pickup_addresses"
  );
};

exports.down = async function (knex) {
  await knex.schema.dropTable("user_billing_addresses");
};
