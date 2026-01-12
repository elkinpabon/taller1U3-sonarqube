const { Pool } = require('pg');

const getDbConfig = () => ({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number.parseInt(process.env.DB_PORT, 10)
});

const pool = new Pool(getDbConfig());

module.exports = {
  query: (text, params) => pool.query(text, params),
  rawQuery: (text) => pool.query(text)
};