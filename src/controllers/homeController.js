const connection = require("../config/database"); //commonjs
const {
  getALLUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDServices");
const User = require("../models/user");

const getHomePage = async (req, res) => {
  let results = await User.find({});
  return res.render("home.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  await User.create({
    // .create và .save là giống nhau nhma .create là dùng trực tiếp còn .save là phải có new
    email: email,
    name: name,
    city: city,
  });
  res.send("Create user success");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  let userId = req.body.userId;
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  await updateUserById(email, name, city, userId);

  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
  let id = req.body.userId;
  await deleteUserById(id);
  res.redirect("/");
};

module.exports = {
  getHomePage,
  getABC,
  getHoiDanIT,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
