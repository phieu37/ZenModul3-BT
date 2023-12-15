// Tạo kết nối đến mongo cloud(database)
const mongoose = require('mongoose');
const { env } = require('./environment');

async function connect() {
  try {
    await mongoose.connect(
      env.MONGODB_URI
    )
    console.log('Database - Connect successfully !!!')
  } catch (error) {
    console.log('Database - Connect failure!!!')
  }
}

module.exports = { connect }