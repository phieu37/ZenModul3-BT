
const User = require('../models/user')
class UserService {
  create = async (data) => {
    try {
      // Kiểm tra trùng email
      const existingUser = await User.findOne({ email: data.email });
      if (existingUser) {
        throw new Error('Email already exists');
      }

      // Nếu không trùng gọi đến tầng model tạo user
      const createUser = new User(data)
      const result = await createUser.save()

      console.log('service hứng từ model và trả về cho controller:');
      console.log(result);
      return result
    } catch (error) {
      throw error
    }
  }
  // nhận thông tin từ controller, gọi updateOne của model User cập nhật
  update = async (id, data) => {
    try {
      // Gọi đến tầng model
      const updateUser = await User.updateOne(
        { _id: id },
        {
          username: data.username,
          age: data.age,
          phone: data.phone,
          email: data.email
        })

      // Trả về kết quả từ model cho controller
      console.log('service hứng từ model và trả về cho controller:');
      console.log(updateUser);
      return updateUser
    } catch (error) {
      throw error
    }
  }
  delete = async (id) => {
    try {
      // gọi đến tầng model
      const deleteUser = await User.findById(id)

      // Trả về kết quả từ model cho controller
      console.log('service hứng từ model và trả về cho controller:');
      console.log(deleteUser);
      await deleteUser.deleteOne()
      return deleteUser
    } catch (error) {
      throw error
    }
  }

  get = async () => {
    try {
      // gọi đến tầng model
      const getUsers = await User.find()
      return getUsers
    } catch (error) {
      throw error
    }
  }
}

module.exports = new UserService()