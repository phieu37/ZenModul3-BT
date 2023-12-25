const express = require('express');
const router = express.Router();
const CustomerController = require('../../controller/CustomerController');
const verifyToken = require('../../middlewares/VerifyToken');
const { validateUserData } = require('../../middlewares/validation');

// /:id? get linh hoạt có hoặc không có tham số
router.get('/:id?', CustomerController.getAll)
router.post('/',validateUserData, verifyToken, CustomerController.create)
router.put('/:id', CustomerController.update)
router.delete('/:id', CustomerController.delete)

module.exports = router;
