const express = require('express');
const router = express.Router();

let customers = [
  { id: 1, name: 'Customer 1', age: 18, address: 'HN' },
  { id: 2, name: 'Customer 2', age: 10, address: 'HD' },
  { id: 3, name: 'Customer 3', age: 25, address: 'HD' },
  { id: 4, name: 'Customer 4', age: 20, address: 'HD' },
];

// Router GET: Thể hiện việc gửi và nhận data qua param, query string
// http://localhost:3000/v1/customers/1
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const result = customers.find(item => item.id === parseInt(id));
  console.log(result);
  res.status(200).json(result);
})
// http://localhost:3000/v1/customers?age=18&address=HD
router.get('/', (req, res) => {
  let result = [...customers]
  let { age, address } = req.query
  age = age || 0
  address = address || ''
  result = result.filter(item => item.age >= parseInt(age) && item.address===address)
  res.status(200).json(result)
})

// router.get('/:id', (req, res) => {
//   const customerId = req.params.id;
//   const queryParam = req.query;

//   const customer = customers.find(item => item.id === parseInt(customerId));
//   console.log(customer, queryParam);
//   res.json({ customer, queryParam });
// });

// Create POST: Thể hiện việc gửi và nhận data qua body
router.post('/', (req, res) => {
  const { name, age } = req.body; 
  console.log(req.body);
  res.status(200).json({ 
    name, 
    age
  })
});

// Update PUT: Thể hiện việc gửi và nhận data qua body
// http://localhost:3000/v1/customers/1
router.put('/:id', (req, res) => {
  const customerId = req.params.id;
  const updatedCustomerData = req.body; 
  console.log(req.body);
  console.log(req.params.id);
  
  customers = customers.map((customer) =>
    customer.id === parseInt(customerId) ? { ...customer, ...updatedCustomerData } : customer
  );
  res.json({ customers });
});

// DELETE: Thể hiện việc gửi và nhận data qua param
router.delete('/:id', (req, res) => {
  const customerId = req.params.id;
  console.log(req.params.id);
  
  customers = customers.filter(customer => customer.id !== parseInt(customerId));
  console.log({ customers });
  res.json({ customers });
});

module.exports = router;


