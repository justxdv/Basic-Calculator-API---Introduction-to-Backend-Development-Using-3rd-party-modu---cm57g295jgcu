const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000; // Set your desired port number here

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.send('Hello World');
});

app.post('/add', function(req, res){
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    if(isNaN(num1) || isNaN(num2)){
        return res.status(400).json({error: "Invalid input. Please provide two valid numbers."});
    }
    const result = num1 + num2;
    res.status(200).json({result: "The sum of given two numbers", value: result});
});

app.post('/sub', function(req, res){
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    if(isNaN(num1) || isNaN(num2)){
        return res.status(400).json({error: "Invalid input. Please provide two valid numbers."});
    }
    const result = num1 - num2;
    res.status(200).json({result: "The difference of given two numbers", value: result});
});

app.post('/multiply', function(req, res){
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    if(isNaN(num1) || isNaN(num2)){
        return res.status(400).json({error: "Invalid input. Please provide two valid numbers."});
    }
    const result = num1 * num2;
    res.status(200).json({result: "The multiplication of given two numbers", value: result});
});

app.post('/divide', function(req, res){
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    if(isNaN(num1) || isNaN(num2)){
        return res.status(400).json({error: "Invalid input. Please provide two valid numbers."});
    }
    if(num2 === 0){
        return res.status(400).json({error: "Invalid input. Cannot divide by zero."});
    }
    const result = num1 / num2;
    if(isFinite(result)){
        res.status(200).json({result: "The division of given two numbers", value: result});
    }else{
        res.status(400).json({error: "Invalid input. Result is not a finite number."});
    }
});

app.use((req, res) => {
  res.status(404).json({error: "Invalid URL."});
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({error: "Internal Server Error."});
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
