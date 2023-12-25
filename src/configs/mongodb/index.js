// Tạo kết nối đến mongo cloud(database)
const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Database - Connect successfully !!!')
    
    // sự kiện cho Ctrl+C đóng kết nối
    process.on('SIGINT', () => {
      console.log('close termination')
      mongoose.connection.close(() => {
        console.log('Database - Disconnected due to application termination')
      })
      process.exit(0)
    })

  } catch (error) {
    console.log('Database - Connect failure!!!', error)
    process.exit(1)
  }
  // CHOKIDAR_USEPOLLING=true
}

module.exports = { connect }

