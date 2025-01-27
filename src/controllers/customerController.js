const { uploadSingleFile } = require("../services/fileServices");
const {
  createCustomerServices,
  createArrayCustomerServices,
  getAllCustomersServices,
  putUpdateCustomerServices,
  deleteACustomerServices,
  deleteArrayCustomerServices,
} = require("../services/CustomerServices");

module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, description } = req.body;

    let imageURL = "";

    if (!req.files || Object.keys(req.files).length === 0) {
      //do not thing
    } else {
      let result = await uploadSingleFile(req.files.image);
      imageURL = result.path;
    }
    let customerData = {
      name,
      address,
      phone,
      email,
      description,
      image: imageURL,
    };
    let customer = await createCustomerServices(customerData);
    return res.status(200).json({
      errorCode: 0,
      data: customer,
    });
  },

  postCreateArrayCustomer: async (req, res) => {
    let customers = await createArrayCustomerServices(req.body.customer);
    if (customers) {
      return res.status(200).json({
        errorCode: 0,
        data: customers,
      });
    } else {
      return res.status(200).json({
        errorCode: -1,
        data: customers,
      });
    }
  },
  getAllCustomers: async (req, res) => {
    let result = await getAllCustomersServices();

    return res.status(200).json({
      length: result.length,
      errorCode: 0,
      data: result,
    });
  },

  putUpdateCustomer: async (req, res) => {
    let { id, name, email, address } = req.body;

    let result = await putUpdateCustomerServices(id, name, email, address);

    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },
  deleteACustomer: async (req, res) => {
    let id = req.body.id;
    let result = await deleteACustomerServices(id);

    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },
  deleteArrayCustomer: async (req, res) => {
    let ids = req.body.customersid;

    let result = await deleteArrayCustomerServices(ids);

    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },
};
