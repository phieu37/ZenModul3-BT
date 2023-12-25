// định nghĩa các quy tắc của dữ liệu gửi lên

const Joi = require('joi');

const productValidationSchema = Joi.object({
  productName: Joi.string().required(),
  manufacturer: Joi.string().required(),
  productionYear: Joi.number().required(),
  quantity: Joi.number().required(),
  price: Joi.number().required(),
});

module.exports = {
  productValidationSchema,
};
