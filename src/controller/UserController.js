
const userService = require("../services/userService")

class UserController {
  create = async (req, res, next) => {
    try {
      // Lấy data được gửi lên để chuyển cho tầng service
      const { username, email, phone, age } = req.body
      // Gọi đến tầng service
      let data = { username, email, phone, age }
      const createUser = await userService.create(data)

      // Xử lý KQ từ service trả lại client
      console.log('controller hứng từ model trả về cho client:');
      console.log(createUser)
      if (createUser) {
        res.status(201).json({
          user: createUser,
          msg: 'User create successful'
        })
      } else {
        throw new Error('Create fail')
      }

    } catch (error) {
      // Xử lý lỗi trùng email
      if (error.message === 'Email already exists') {
        return res.status(400).json({ message: 'Email đã tồn tại' });
      }

      // Bắt các lỗi khác
      next(error)
    }
  }
  update = async (req, res, next) => {
    try {
      // Lấy data được gửi lên 
      const { username, email, phone, age } = req.body
      const idUser = req.params.id

      // Gọi đến tầng service
      let data = {
        username,
        email,
        phone,
        age
      }
      // Gọi update từ tầng service(chuyển thông tin từ request cho service)
      const updateUser = await userService.update(idUser, data)

      console.log('controller hứng từ model trả về cho client:');
      console.log(updateUser);
      // Xử lý KQ từ service trả lại client
      if (updateUser) {
        res.status(200).json({
          msg: 'Update successful',
          updateUser
        })
      } else {
        throw new Error('Update fail')
      }
    } catch (error) {
      next(error)
    }
  }
  delete = async (req, res, next) => {
    try {
      // Lấy data được gửi lên để chuyển cho tầng service
      const idUser = req.params.id

      // Gọi đến tầng service
      const deleteUser = await userService.delete(idUser)
      console.log('controller hứng từ model trả về cho client:');
      console.log(deleteUser);
      if (deleteUser) {
        res.status(200).json({
          msg: 'Delete',
          deleteUser
        })
      } else {
        throw new Error('Delete fail')
      }
    } catch (error) {
      next(error)
    }
  }

  get = async (req, res, next) => {
    try {
      // Gọi đến service
      const getUsers = await userService.get()
      console.log('controller hứng từ model trả về cho client:');
      console.log(getUsers);
      if (getUsers) {
        res.status(200).json({
          msg: 'List user',
          getUsers
        })
      } else {
        throw new Error('Get list fail')
      }
    } catch (error) {
      throw error
    }
  }
}

module.exports = new UserController()