const Customer = require("../models/customer")

class CustomerService {
  // nhận data từ controller
  create = async (data) => {
    try {
      // gọi đến tầng model xử lý
      const newCustomer = new Customer(data)
      const result = await newCustomer.save()

      // Trả lại KQ đã xử lý cho controller
      return result
    } catch (error) {
      throw error
    }
  }
  // nhận id, data từ controller
  update = async (id, data) => {
    try {
      // gọi đến tầng model xử lý
      const result  = await Customer.findByIdAndUpdate(id, data)

      // Trả lại KQ đã xử lý cho controller
      return result
    } catch (error) {
      throw error
    }
  }
  // nhận id từ controller
  delete = async (id) => {
    try {
      // gọi đến tầng model xử lý
      const result  = await Customer.findByIdAndDelete(id)

      // Trả lại KQ đã xử lý cho controller
      return result
    } catch (error) {
      throw error
    }
  }
  // Lấy data trả về cho controller
  getAll = async () => {
    try {
      const customerList = await Customer.find()

      // Trả lại KQ đã xử lý cho controller
      return customerList
    } catch (error) {
      throw error
    }
  }
}

module.exports = new CustomerService()
