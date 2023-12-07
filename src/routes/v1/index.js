const express = require('express');
const userRoutes = require('./userRoutes');
const customerRoutes = require('./customerRoutes');
const productRouter = require('./productRouter')

const router = express.Router();

router.get('/status', (req, res) => {
  res.status(200).json({msg: 'API are ready'});
});

router.use('/users', userRoutes)

router.use('/customers', customerRoutes)

router.use('/products', productRouter)

module.exports = router;