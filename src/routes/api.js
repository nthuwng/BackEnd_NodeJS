const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
} = require("../controllers/apiController");

routerAPI.get("/user", getUsersAPI);
routerAPI.post("/user", postCreateUserAPI);
routerAPI.put("/user", putUpdateUserAPI);
routerAPI.delete("/user", deleteUserAPI);

module.exports = routerAPI;
