const {
  createProject,
  getProject,
  deleteAProjectServices,
  putUpdateProjectServices,
} = require("../services/productServices");

const postCreateProject = async (req, res) => {
  let result = await createProject(req.body);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};
const getAllProject = async (req, res) => {
  let result = await getProject(req.query);
  return res.status(200).json({
    length: result.length,
    errorCode: 0,
    data: result,
  });
};

const deleteAProject = async (req, res) => {
  let id = req.body.id;
  let result = await deleteAProjectServices(id);

  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

const putUpdateProject = async (req, res) => {
  let { id, name, endDate, description } = req.body;
  console.log(req.body);
  let result = await putUpdateProjectServices(id, name, endDate, description);

  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};
module.exports = {
  postCreateProject,
  getAllProject,
  deleteAProject,
  putUpdateProject,
};
