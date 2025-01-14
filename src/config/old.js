const mysql = require('mysql2');
require('dotenv').config();

//creat the connection to the database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT, //default 3306
    password: process.env.DB_PASSWORD
  });

  module.exports = connection;