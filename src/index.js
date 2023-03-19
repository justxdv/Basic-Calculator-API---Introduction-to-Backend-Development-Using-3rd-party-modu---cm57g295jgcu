const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Hello World endpoint
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// Addition endpoint
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    res.status(400).json({
      status: 'error',
      message: 'Invalid data types',
    });
    return;
  }

  const sum = num1 + num2;

  if (sum < -1000000) {
    res.status(400).json({
      status: 'error',
      message: 'Underflow',
    });
    return;
  }

  if (sum > 1000000) {
    res.status(400).json({
      status: 'error',
      message: 'Overflow',
    });
    return;
  }

  res.json({
    status: 'success',
    message: 'The sum of given two numbers',
    sum,
  });
});

// Subtraction endpoint
app.post('/sub', (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    res.status(400).json({
      status: 'error',
      message: 'Invalid data types',
    });
    return;
  }

  const diff = num1 - num2;

  if (diff < -1000000) {
    res.status(400).json({
      status: 'error',
      message: 'Underflow',
    });
    return;
  }

  if (diff > 1000000) {
    res.status(400).json({
      status: 'error',
      message: 'Overflow',
    });
    return;
  }

  res.json({
    status: 'success',
    message: 'The difference of given two numbers',
    difference: diff,
  });
});

// Multiplication endpoint
app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    res.status(400).json({
      status: 'error',
      message: 'Invalid data types',
    });
    return;
  }

  const result = num1 * num2;

  if (result < -1000000) {
    res.status(400).json({
      status: 'error',
      message: 'Underflow',
    });
    return;
  }

  if (result > 1000000) {
    res.status(400).json({
      status: 'error',
      message: 'Overflow',
    });
    return;
  }

  res.json({
    status: 'success',
    message: 'The product of given numbers',
    result,
  });
});

// Division endpoint
app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    res.status(400).json({
      status: 'error',
      message: 'Invalid data types',
    });
    return;
  }

  try {
    const result = num1 / num2;

    if (result < -1000000) {
      res.status(400).json({
        status: 'error',
        message: 'Underflow',
      });
      return;
    }

    if (result > 1000000) {
      res.status(400).json({
        status: 'error',
        message: 'Overflow',
      });
      return;
    }

    res.json({
      status: 'success',
      message: 'The division of given numbers',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Cannot divide by zero',
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
