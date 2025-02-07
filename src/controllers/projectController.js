const { createProject } = require("../services/productServices");

const postCreateProject = async (req, res) => {
  let result = await createProject(req.body);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

module.exports = { postCreateProject };
