const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
} = require("../controllers/apiController");

routerAPI.get("/user", getUsersAPI);
routerAPI.post("/user", postCreateUserAPI);
routerAPI.put("/user", putUpdateUserAPI);

module.exports = routerAPI;
