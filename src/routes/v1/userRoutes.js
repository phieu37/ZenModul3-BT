const express = require('express');
const router = express.Router();
const UserController = require('../../controller/UserController');
const verifyToken = require('../../middlewares/VerifyToken');
const { validateUserData } = require('../../middlewares/validation');

// Goi den controller
// Thông tin của 1 user: username, email, phone, age
// Sử dụng middlewares vào router để kiểm tra dữ liệu đầu vào
router.get('/', UserController.get)
router.post('/', validateUserData, verifyToken, UserController.create)
router.put('/:id', UserController.update)
router.delete('/:id', UserController.delete)

module.exports = router;
