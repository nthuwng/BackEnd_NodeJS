const Customer = require("../models/customer");

const createCustomerServices = async (customerData) => {
  try {
    let result = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createArrayCustomerServices = async (arr) => {
  try {
    let result = await Customer.insertMany(arr);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getAllCustomersServices = async (limit, page) => {
  try {
    let result = null;
    if (limit && page) {
      let offset = (page - 1) * limit;
      result = await Customer.find({}).skip(offset).limit(limit).exec();
    } else {
      result = await Customer.find({}); // vì không có điều kiện gì nên trong hàm find truyền vào object rỗng
    }
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const putUpdateCustomerServices = async (id, name, email, address) => {
  try {
    let result = await Customer.updateOne(
      { _id: id },
      { name, email, address }
    );
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const deleteACustomerServices = async (id) => {
  try {
    let result = await Customer.deleteById(id); //soft delete nó dùng để ẩn đi chứ không phải xóa thật sự
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const deleteArrayCustomerServices = async (ids) => {
  try {
    let result = await Customer.delete({ _id: { $in: ids } }); //soft delete nó dùng để ẩn đi chứ không phải xóa thật sự
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
module.exports = {
  createCustomerServices,
  createArrayCustomerServices,
  getAllCustomersServices,
  putUpdateCustomerServices,
  deleteACustomerServices,
  deleteArrayCustomerServices,
};
