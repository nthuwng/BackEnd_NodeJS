require('dotenv').config();
const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngine'); //commonjs
const webRoute = require('./routes/web'); //commonjs
const mysql = require('mysql2');


const app = express();// app express
const port = process.env.PORT || 8888; //port => hardcode . uat .prod
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoute);

//test connection mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'hoidanit',
    port: 3309,
    password: '123456'
  });
  

  connection.query(
    'SELECT * FROM Users',
    function (err, results, fields) {
      console.log("results= ",results); // results contains rows returned by server
      console.log("fields= ",fields); // fields contains extra meta data about results, if available
    }
  );

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})