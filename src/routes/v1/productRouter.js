const express = require('express');
const router = express.Router();
const ProductController = require('../../controller/ProductController');
const verifyToken = require('../../middlewares/VerifyToken');
const { validateUserData } = require('../../middlewares/validation');

router.get('/:id?', ProductController.getAll)
router.post('/', validateUserData, verifyToken, ProductController.create)
router.put('/:id', ProductController.update)
router.delete('/:id', ProductController.delete)

module.exports = router;
