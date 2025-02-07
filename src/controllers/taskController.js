const {
  createTask,
  getTask,
  putUpdateTaskServices,
  deleteATaskServices,
} = require("../services/taskServices");

const postCreateTask = async (req, res) => {
  let result = await createTask(req.body);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

const getAllTask = async (req, res) => {
  let result = await getTask(req.query);
  return res.status(200).json({
    length: result.length,
    errorCode: 0,
    data: result,
  });
};

const putUpdateTask = async (req, res) => {
  let result = await putUpdateTaskServices(req.body);

  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

const deleteATask = async (req, res) => {
  let id = req.body.id;
  let result = await deleteATaskServices(id);

  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

module.exports = { getAllTask, postCreateTask, deleteATask, putUpdateTask };
