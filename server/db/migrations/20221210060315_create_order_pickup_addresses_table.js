exports.up = async function (knex) {
  await knex.schema.createTableLike(
    "order_pickup_addresses",
    "user_pickup_addresses",
    (table) => {
      table.integer("orderId").notNullable();
    }
  );
};

exports.down = async function (knex) {
  await knex.schema.dropTable("order_pickup_addresses");
};
