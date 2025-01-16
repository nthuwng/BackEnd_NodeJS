const connection = require("../config/database"); //commonjs
const {getALLUsers} = require("../services/CRUDServices");

const getHomePage = async (req, res) => {
  let results = await getALLUsers();
  return res.render("home.ejs",{listUsers:results});
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

  console.log("email = ", email, "name = ", name, "city = ", city);

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city)VALUES (?,?,?)`,
    [email, name, city]
  );
  res.send("Create user success");
};

const getCreateUser = (req, res) => {
  res.render("create.ejs");
};

module.exports = {
  getHomePage,
  getABC,
  getHoiDanIT,
  postCreateUser,
  getCreateUser,
};
