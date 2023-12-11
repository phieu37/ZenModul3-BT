const express = require('express');
const CustomerController = require('../../controller/CustomerController');
const router = express.Router();

// /:id? get linh hoạt có hoặc không có tham số
router.get('/:id?', CustomerController.get)
router.post('/', CustomerController.create)
router.put('/:id', CustomerController.update)
router.delete('/:id', CustomerController.delete)

module.exports = router;
