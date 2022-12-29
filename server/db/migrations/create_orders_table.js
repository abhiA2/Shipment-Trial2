exports.up = async function (knex) {
  await knex.schema.createTable("orders", (table) => {
    table.increments("id").primary();
    table.float("logisticFee").notNullable();
    table.float("tax").notNullable();
    table.float("total").notNullable();
    table.integer("shippingPartnerId").notNullable();
    table.integer("shipmentModeId").notNullable();
    table.float("billedWeight").notNullable();
    table.integer("userId").notNullable();
    table
      .enum("status", [
        "draft",
        "packed",
        "manifested",
        "dispatched",
        "received",
        "cancelled",
        "disputes",
      ])
      .notNullable();
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("orders");
};
