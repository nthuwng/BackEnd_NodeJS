const User = require("../models/user");
const { uploadSingleFile } = require("../services/fileServices");

const getUsersAPI = async (req, res) => {
  let results = await User.find({});
  return res.status(200).json({
    length: results.length,
    errorCode: 0,
    data: results,
  });
};

const postCreateUserAPI = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  let user = await User.create({
    // .create và .save là giống nhau nhma .create là dùng trực tiếp còn .save là phải có new
    email: email,
    name: name,
    city: city,
  });
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const putUpdateUserAPI = async (req, res) => {
  let userId = req.body.userId;
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  let user = await User.updateOne(
    { _id: userId },
    { email: email, name: name, city: city }
  );

  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const deleteUserAPI = async (req, res) => {
  let id = req.body.userId;
  // await deleteUserById(id);
  let user = await User.deleteOne({ _id: id });

  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const postUploadFilleAPT = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let results = await uploadSingleFile(req.files.image);
  console.log("results: ", results);

  res.send("ok");
};

module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadFilleAPT,
};
