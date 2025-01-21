require("dotenv").config();
const express = require("express"); //commonjs
const configViewEngine = require("./config/viewEngine"); //commonjs
const webRoute = require("./routes/web"); //commonjs
const connection = require("./config/database"); //commonjs
const mongoose = require("mongoose");

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

const kittySchema = new mongoose.Schema({
  name: String,
});
const Kitten = mongoose.model("Kitten", kittySchema);
const cat = new Kitten({ name: "Hoi dan IT cat" });
cat.save();

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
