exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table.string("mobileNumber").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.enum("accountType", ["personal", "business"]).notNullable();
    table.unique("email");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("users");
};
