
const express = require('express');
const router = express.Router();
const AuthController = require('../../controller/AuthController');

// Định nghĩa router và gọi đến controller (username and password)
router.post('/login', AuthController.login);

module.exports = router
