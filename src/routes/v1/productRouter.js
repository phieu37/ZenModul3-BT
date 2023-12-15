const express = require('express');
const ProductController = require('../../controller/ProductController');
const router = express.Router();

router.get('/:id?', ProductController.getAll)
router.post('/', ProductController.create)
router.put('/:id', ProductController.update)
router.delete('/:id', ProductController.delete)

module.exports = router;
