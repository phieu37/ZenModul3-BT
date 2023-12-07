const express = require('express');

const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('User Router');
// });

// router.get('/', (req, res) => {
//   res.status(200).json({msg: `query string`})
// });

// http://localhost:3000/v1/users/123
// router.get('/:id', (req, res) => {
//   let id = req.params.id;
//   console.log(id);
//   res.status(200).json({msg: `Get ID ${id}`})
// });

// http://localhost:3000/v1/users?page=10&sort=1
router.get('/', (req, res) => {
  const { page, sort } = req.query;
  console.log(page, sort);
  res.status(200).json({ msg: `Get query string user` })
});

// http://localhost:3000/v1/users
router.post('/', (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  res.status(200).json({ 
    username,
    password
  })
})

// PUT route
router.put('/', (req, res) => {
  console.log(req.body.username + req.body.password);
  res.status(200).json( 'router PUT: ' + req.body.username + req.body.password)
});

// DELETE route
router.delete('/', (req, res) => {
  console.log(req.body.username);
  res.status(200).json( 'router DELETE: ' + req.body.username )
});

module.exports = router;