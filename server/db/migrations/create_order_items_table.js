exports.up = async function (knex) {
  await knex.schema.createTable("order_items", (table) => {
    table.increments("id").primary();
    table.integer("orderId").notNullable();
    table.string("productName").notNullable();
    table.string("sku");
    table.string("hsn").notNullable();
    table.integer("qty").notNullable();
    table.float("unitPrice").notNullable();
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("order_items");
};
