
const Product = require('../models/product')

class ProductService {
  // nhận data từ controller
  create = async (data) => {
    try {
      // gọi đến tầng model
      const newProduct = new Product(data)
      const result = await newProduct.save()

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
      const result = await Product.findByIdAndUpdate(id, data)

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
      const result = await Product.findByIdAndDelete(id)

      // Trả lại KQ đã xử lý cho controller
      return result
    } catch (error) {
      throw error
    }
  }
  // Lấy data trả về cho controller
  getAll = async () => {
    try {
      const productList = await Product.find()

      // Trả lại KQ đã xử lý cho controller
      return productList
    } catch (error) {
      throw error
    }
  }
}

module.exports = new ProductService()
