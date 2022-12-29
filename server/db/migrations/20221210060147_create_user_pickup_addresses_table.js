exports.up = async function (knex) {
  await knex.schema.createTable("user_pickup_addresses", (table) => {
    table.increments("id").primary();
    table.integer("userId").notNullable();
    table.string("firstName", 255).notNullable();
    table.string("lastName", 255).notNullable();
    table.string("mobileNo", 15).notNullable();
    table.string("alternateMobileNo", 20);
    table.string("fullAddress", 255).notNullable();
    table.string("landmark").notNullable();
    table.string("pincode", 10).notNullable();
    table.string("city", 255).notNullable();
    table.string("country", 255).notNullable();
    table.string("state", 255).notNullable();
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("user_pickup_addresses");
};
