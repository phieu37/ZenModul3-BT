const express = require('express');
const UserController = require('../../controller/UserController');
const router = express.Router();

// Goi den controller
// Thông tin của 1 user: username, email, phone, age
router.get('/', UserController.get)
router.post('/', UserController.create)
router.put('/:id', UserController.update)
router.delete('/:id', UserController.delete)

module.exports = router;