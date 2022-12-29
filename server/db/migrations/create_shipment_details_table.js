exports.up = async function (knex) {
  await knex.schema.createTable("shipment_details", (table) => {
    table.increments("id").primary();
    table.integer("orderId").notNullable();
    table.float("actualWeight").notNullable();
    table.float("length").notNullable();
    table.float("breadth").notNullable();
    table.float("height").notNullable();
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("shipment_details");
};
