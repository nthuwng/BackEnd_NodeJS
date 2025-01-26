const { uploadSingleFile } = require("../services/fileServices");
const { createCustomerServices } = require("../services/CustomerServices");

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
};
