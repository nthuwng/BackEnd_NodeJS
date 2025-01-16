const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getABC,
  getHoiDanIT,
  postCreateUser,
  getCreateUser,
  getUpdateUser,
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/abc", getABC);
router.get("/hoidanit", getHoiDanIT);

router.post("/create-user", postCreateUser);
router.get("/create", getCreateUser);
router.get("/update", getUpdateUser);

module.exports = router;
