const mysql = require('mysql2');
require('dotenv').config();

//creat the connection to the database
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT, //default 3306
//     password: process.env.DB_PASSWORD
//   });


//createPool dùng để giới hạn số lượng kết nối tới database và nó nhanh hơn createConnection
  const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT, //default 3306
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  module.exports = connection;