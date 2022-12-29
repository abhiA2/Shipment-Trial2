exports.up = async function (knex) {
  await knex.schema.createTable("shipping_partners", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.unique("name");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("shipping_partners");
};
