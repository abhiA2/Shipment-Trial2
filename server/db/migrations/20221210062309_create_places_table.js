exports.up = async function (knex) {
  const fs = require("fs");
  const path = require("path");
  const sql = fs.readFileSync(
    path.join(__dirname, "../data/world.sql"),
    "utf8"
  );
  const statements = sql.split(";").filter((s) => s.trim().length > 0);

  for (const statement of statements) {
    await knex.raw(statement);
  }
};

exports.down = async function (knex) {
  await knex.schema.dropTable("countries");
  await knex.schema.dropTable("states");
  await knex.schema.dropTable("cities");
};
