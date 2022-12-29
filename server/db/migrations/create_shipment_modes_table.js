exports.up = async function (knex) {
  await knex.schema.createTable("shipment_modes", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("shipment_modes");
};
