const path = require("path");
require("dotenv").config();
console.log(process.env.MYSQL_URL);
module.exports = {
  development: {
    client: "mysql",
    connection: process.env.MYSQL_URL ?? {
      host: "127.0.0.1",
      user: "your_database_user",
      password: "your_database_password",
      database: "myapp_dev",
    },
    migrations: {
      directory: path.join(__dirname, "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "db", "seeds"),
    },
  },

  production: {
    client: "mysql",
    connection: process.env.MYSQL_URL ?? {
      host: "127.0.0.1",
      user: "your_database_user",
      password: "your_database_password",
      database: "myapp_prod",
    },
    migrations: {
      directory: path.join(__dirname, "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "db", "seeds"),
    },
  },
};
