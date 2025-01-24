const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateUserAPI,
} = require("../controllers/apiController");

routerAPI.get("/user", getUsersAPI);
routerAPI.post("/user", postCreateUserAPI);

module.exports = routerAPI;
