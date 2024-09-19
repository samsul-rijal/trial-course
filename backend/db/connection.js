const { Pool } = require("pg");


const connection = new Pool({
  user: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: 5432,
  database: 'trycourse',
});


module.exports = connection