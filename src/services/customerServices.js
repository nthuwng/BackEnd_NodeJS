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

const getAllCustomersServices = async () => {
  try {
    let result = await Customer.find({}); // vì không có điều kiện gì nên trong hàm find truyền vào object rỗng
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
module.exports = {
  createCustomerServices,
  createArrayCustomerServices,
  getAllCustomersServices,
  putUpdateCustomerServices,
};
