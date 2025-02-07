const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileApi,
  postUploadMultipleFilesAPI,
} = require("../controllers/apiController");
const {
  postCreateCustomer,
  postCreateArrayCustomer,
  getAllCustomers,
  putUpdateCustomer,
  deleteACustomer,
  deleteArrayCustomer,
} = require("../controllers/customerController");

const {
  postCreateProject,
  getAllProject,
  deleteAProject,
  putUpdateProject,
} = require("../controllers/projectController");

routerAPI.get("/user", getUsersAPI);
routerAPI.post("/user", postCreateUserAPI);
routerAPI.put("/user", putUpdateUserAPI);
routerAPI.delete("/user", deleteUserAPI);
routerAPI.post("/file", postUploadSingleFileApi);
routerAPI.post("/files", postUploadMultipleFilesAPI);

//CUSTOMER
routerAPI.post("/customer", postCreateCustomer);
routerAPI.post("/customer-many", postCreateArrayCustomer);
routerAPI.get("/customers", getAllCustomers);
routerAPI.put("/customers", putUpdateCustomer);
routerAPI.delete("/customers", deleteACustomer);
routerAPI.delete("/customers-many", deleteArrayCustomer);

routerAPI.get("/info", (req, res) => {
  console.log(req.query);
  return res.status(200).json({
    data: req.query,
  });
});

routerAPI.get("/info/:name/:city", (req, res) => {
  console.log(req.params);
  return res.status(200).json({
    data: req.params, //dùng params hạn chế hơn query vì query không cần định nghĩa thêm route
  });
});

//PROJECT
routerAPI.get("/project", getAllProject);
routerAPI.post("/project", postCreateProject);
routerAPI.delete("/project", deleteAProject);
routerAPI.put("/project", putUpdateProject);

module.exports = routerAPI;
