require("dotenv").config();
const express = require("express"); 
const configViewEngine = require("./config/viewEngine"); 
const webRoute = require("./routes/web"); 
const apiRoute = require("./routes/api"); 

const connection = require("./config/database"); 

const app = express(); // app express
const port = process.env.PORT || 8888; //port => hardcode . uat .prod
const hostname = process.env.HOST_NAME;

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
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening on port ${port}`);
    });
  } catch (error) {
    console.log("error connect to database", error);
  }
})();
