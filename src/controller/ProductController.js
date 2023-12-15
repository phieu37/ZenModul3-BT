
const ProductService = require("../services/ProductService")

class ProductController {
  create = async (req, res, next) => {
    try {
      // Lấy data gửi lên
      const { productName, manufacturer, manufacturingYear, quantity, price } = req.body
      const data = { productName, manufacturer, manufacturingYear, quantity, price }

      // Gửi data cho tầng service xử lý
      const result = await ProductService.create(data)

      // Trả KQ đã xử lý cho client
      if (result) {
        res.status(201).json({
          msg: 'Product created successfully',
          product: result
        })
      } else {
        throw new Error('Create product fail')
      }
    } catch (error) {
      next(error)
    }
  }
  update = async (req, res, next) => {
    try {
      // Lấy id, data gửi lên
      const { id } = req.params
      const { productName, manufacturer, manufacturingYear, quantity, price } = req.body
      const data = { productName, manufacturer, manufacturingYear, quantity, price }

      // Gửi id, data cho tầng service xử lý
      const result = await ProductService.update(id, data)

      // Trả KQ đã xử lý cho client
      if (result) {
        res.status(200).json({
          msg: 'Product updated successfully',
          product: result
        })
      } else {
        throw new Error('Updated product fail')
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
      const result = await ProductService.delete(id)

      // Trả KQ đã xử lý cho client
      if (result) {
        res.status(200).json({
          msg: 'Product delete successfully',
          product: result
        })
      } else {
        throw new Error('Delete product fail')
      }
    } catch (error) {
      next(error)
    }
  }
  getAll = async (req, res, next) => {
    try {
      // Gọi data từ tầng service xử lý
      const productList = await ProductService.getAll();

      // Trả KQ đã xử lý cho client
      res.status(200).json({
        msg: 'List of product',
        customers: productList
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new ProductController()
