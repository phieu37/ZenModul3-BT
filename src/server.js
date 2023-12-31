const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const API_v1 = require('./routes/v1');  // /v1 ngam hieu vao index.js
const errorHandle = require('./middlewares/errorHandler');
const db = require('./configs/mongodb');

const app = express();
const port = process.env.APP_PORT || 3000;

// Connect to DB
db.connect()

// middlewares 
// app.use(express.json)
// app.use(cors)

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json())  // parse application/json

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use('/v1', API_v1)

app.use(errorHandle)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});