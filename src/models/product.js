
const mongoose = require('mongoose')

// ĐN schema Tên sản phẩm, nhà sản xuất, năm sản xuất, số lượng, giá bán
const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  manufacturer: { type: String, required: true },
  manufacturingYear: { type: Number, require: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }
})

// Tạo model User từ schema
const Product = mongoose.model('Product', productSchema)

module.exports = Product