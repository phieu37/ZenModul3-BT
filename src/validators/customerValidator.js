// định nghĩa các quy tắc của dữ liệu gửi lên

const Joi = require('joi');

const customerValidationSchema = Joi.object({
  fullName: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
  birthYear: Joi.number().required(),
  gender: Joi.string().required(),
});

module.exports = {
  customerValidationSchema,
};
