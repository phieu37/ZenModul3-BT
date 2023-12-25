const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const customerRoutes = require('./customerRoutes');
const productRouter = require('./productRouter')
const authRouter = require('./authRoutes')


router.get('/status', (req, res) => {
  res.status(200).json({msg: 'API are ready'});
});

router.use('/auth', authRouter)

router.use('/users', userRoutes)

router.use('/customers', customerRoutes)

router.use('/products', productRouter)

module.exports = router;