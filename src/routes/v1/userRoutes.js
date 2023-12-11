const express = require('express');
const userController = require('../../controller/userController');
const router = express.Router();

router.get('/', userController.get)
router.post('/', userController.create)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

module.exports = router;