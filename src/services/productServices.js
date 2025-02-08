const Project = require("../models/project");
const aqp = require("api-query-params");

module.exports = {
  createProject: async (data) => {
    if (data.type === "EMPTY-PROJECT") {
      let result = await Project.create(data);
      return result;
    }
    if (data.type === "ADD-USERS") {
      let myProject = await Project.findById(data.projectId).exec();
      for (let i = 0; i < data.usersArr.length; i++) {
        myProject.usersInfor.push(data.usersArr[i]); //push dùng để thêm phần tử vào mảng
      }
      let newResult = await myProject.save();
      return newResult;
    }

    if (data.type === "REMOVE-USERS") {
      let myProject = await Project.findById(data.projectId).exec();
      for (let i = 0; i < data.usersArr.length; i++) {
        myProject.usersInfor.pull(data.usersArr[i]); //pull dùng để xóa phần tử trong mảng
      }
      let newResult = await myProject.save();
      return newResult;
    }
    if (data.type === "ADD-TASK") {
      let myProject = await Project.findById(data.projectId).exec();
      for (let i = 0; i < data.taskArr.length; i++) {
        myProject.tasks.push(data.taskArr[i]); //pull dùng để xóa phần tử trong mảng
      }
      let newResult = await myProject.save();
      return newResult;
    }

    return null;
  },

  getProject: async (queryString) => {
    const page = queryString.page;

    const { filter, limit, population } = aqp(queryString);
    delete filter.page;

    let offset = (page - 1) * limit;
    let result = await Project.find(filter)
      .populate(population)
      .skip(offset)
      .limit(limit)
      .exec();
    return result;
  },

  deleteAProjectServices: async (id) => {
    try {
      let result = await Project.deleteById(id); //soft delete nó dùng để ẩn đi chứ không phải xóa thật sự
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  putUpdateProjectServices: async (id, name, endDate, description) => {
    try {
      let result = await Project.updateOne(
        { _id: id },
        { name, endDate, description }
      );
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
