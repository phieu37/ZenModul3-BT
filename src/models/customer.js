const mongoose = require('mongoose');

// ĐN schema Họ và tên, số điện thoại, email, địa chỉ, năm sinh, giới tính
const customerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  birthYear: { type: Number, required: true },
  gender: { type: String, required: true },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
