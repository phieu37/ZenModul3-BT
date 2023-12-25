
const { userValidationSchema } = require('../validators/userValidator');
const { productValidationSchema } = require('../validators/productValidator');
const { customerValidationSchema } = require('../validators/customerValidator');

// Middlewares kiểm tra và xác thực dữ liệu đầu vào trước khi chuyển nó đến controller
const validateUserData = (req, res, next) => {
  const { error, value } = userValidationSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors: errorMessages });
  }
  // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middlewares tiếp theo/xử lý logic
  req.body = value;
  next();
};

const validateProductData = (req, res, next) => {
  const { error, value } = productValidationSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors: errorMessages });
  }
  req.body = value;
  next();
};

const validateCustomerData = (req, res, next) => {
  const { error, value } = customerValidationSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors: errorMessages });
  }
  req.body = value;
  next();
};

module.exports = {
  validateUserData,
  validateProductData,
  validateCustomerData,
};
