require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoute = require("./routes/web");
const apiRoute = require("./routes/api");
const fileUpload = require("express-fileupload");
const connection = require("./config/database");

const app = express(); // app express
const port = process.env.PORT || 8888; //port => hardcode . uat .prod
const hostname = process.env.HOST_NAME;
const { MongoClient } = require("mongodb");
// cofig file upload
app.use(fileUpload());

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//config template engine
configViewEngine(app);

//khai báo route
app.use("/", webRoute);
app.use("/v1/api/", apiRoute);

(async () => {
  try {
    // await connection();

    //using mondodb driver
    const url = process.env.DB_HOST_WITH_DRIVER;
    const client = new MongoClient(url);

    // Database Name
    const dbName = process.env.DB_NAME;

    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection("customers");
    console.log("=>> ",await collection.findOne({name:"customer 1"}));

    //
    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening on port ${port}`);
    });
  } catch (error) {
    console.log("error connect to database", error);
  }
})();
