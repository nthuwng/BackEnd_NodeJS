const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  { timestamps: true } //auto create created_at, updated_at
);
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
