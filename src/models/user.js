
const mongoose = require('mongoose')

// ĐN schema cho user với các trường: username, email, age, phone
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 18 },
  phone: { type: String, required: true, unique: true }
})

// Tạo model User từ schema
const User = mongoose.model('User', userSchema)

module.exports = User