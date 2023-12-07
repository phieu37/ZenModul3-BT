const express = require('express');
const router = express.Router();

let products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' }
];

// Router GET: Thể hiện việc gửi và nhận data qua param, query string
router.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const queryParam = req.query.param;

  const product = products.find((product) => product.id === productId);
  res.json({ product, queryParam });
});

// Router POST: Thể hiện việc gửi và nhận data qua body
router.post('/products', (req, res) => {
  const newProduct = req.body;

  products.push(newProduct);
  res.json({ products });
});

// Router PUT: Thể hiện việc gửi và nhận data qua body
router.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProductData = req.body;

  products = products.map((product) =>
    product.id === productId ? { ...product, ...updatedProductData } : product
  );
  res.json({ products });
});

// Router DELETE: Thể hiện việc gửi và nhận data qua param
router.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  products = products.filter((product) => product.id !== productId);
  res.json({ products });
});

module.exports = router;