exports.up = async function (knex) {
  await knex.schema.createTableLike(
    "order_delivery_addresses",
    "order_pickup_addresses"
  );
};

exports.down = async function (knex) {
  await knex.schema.dropTable("order_delivery_addresses");
};
