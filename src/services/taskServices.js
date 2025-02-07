const Task = require("../models/task");
const aqp = require("api-query-params");

module.exports = {
  createTask: async (data) => {
    if (data.type === "EMPTY-TASK") {
      let result = await Task.create(data);
      return result;
    }
  },
  getTask: async (queryString) => {
    const page = queryString.page;
    const { filter, limit, population } = aqp(queryString);
    delete filter.page;

    let offset = (page - 1) * limit;
    let result = await Task.find(filter)
      .populate(population)
      .skip(offset)
      .limit(limit)
      .exec();
    return result;
  },
  putUpdateTaskServices: async (data) => {
    try {
      let result = await Task.updateOne({ _id: data.id }, { ...data });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  deleteATaskServices: async (id) => {
    try {
      let result = await Task.deleteById(id); //soft delete nó dùng để ẩn đi chứ không phải xóa thật sự
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
