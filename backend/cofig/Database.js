const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "bmw*2212",
  host: "localhost",
  port: 5432, // default Postgres port
  database: "task-mangiment-system",
});

module.exports = pool;
