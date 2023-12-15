
const CustomerService = require("../services/CustomerService")

class CustomerController {
  create = async (req, res, next) => {
    try {
      // Lấy data gửi lên
      const { fullName, phoneNumber, email, address, birthYear, gender } = req.body
      const data = { fullName, phoneNumber, email, address, birthYear, gender }

      // Gửi data cho tầng service xử lý
      const result = await CustomerService.create(data)

      // Trả KQ đã xử lý cho client
      if (result) {
        res.status(201).json({
          msg: 'Customer created successfully',
          customer: result
        })
      } else {
        throw new Error('Create customer fail')
      }
    } catch (error) {
      next(error)
    }
  }
  update = async (req, res, next) => {
    try {
      // Lấy id, data gửi lên
      const { id } = req.params
      const { fullName, phoneNumber, email, address, birthYear, gender } = req.body
      const data = { fullName, phoneNumber, email, address, birthYear, gender }

      // Gửi id, data cho tầng service xử lý
      const result = await CustomerService.update(id, data)

      // Trả KQ đã xử lý cho client
      if (result) {
        res.status(200).json({
          msg: 'Customer updated successfully',
          customer: result
        })
      } else {
        throw new Error('Update customer fail')
      }
    } catch (error) {
      next(error)
    }
  }
  delete = async (req, res, next) => {
    try {
      // Lấy id gửi lên
      const { id } = req.params

      // Gửi id cho tầng service xử lý
      const result = await CustomerService.delete(id)

      // Trả KQ đã xử lý cho client
      if (result) {
        res.status(200).json({
          msg: 'Customer delete successfully',
          customer: result
        })
      } else {
        throw new Error('Delete customer fail')
      }
    } catch (error) {
      next(error)
    }
  }
  getAll = async (req, res, next) => {
    try {
      // Gọi data từ tầng service xử lý
      const customerList = await CustomerService.getAll();

      // Trả KQ đã xử lý cho client
      res.status(200).json({
        msg: 'List of customers',
        customers: customerList
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new CustomerController()