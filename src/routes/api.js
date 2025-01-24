const express = require("express");
const routerAPI = express.Router();
const { getUsersAPI } = require("../controllers/apiController");

routerAPI.get("/", (req, res) => {
  res.send("Hello API");
});

routerAPI.get("/abc", getUsersAPI);

module.exports = routerAPI;
