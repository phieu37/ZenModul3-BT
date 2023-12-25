// định nghĩa các quy tắc của dữ liệu gửi lên

const Joi = require('joi');

const userValidationSchema = Joi.object({
  username: Joi.string().alphanum().required().messages({
    'any.required': 'Username is required!',
  }),
  email: Joi.string().email().required(),
  age: Joi.number().min(18).required(),
  phone: Joi.string().min(9).max(11).required(),
});

module.exports = {
  userValidationSchema,
};
