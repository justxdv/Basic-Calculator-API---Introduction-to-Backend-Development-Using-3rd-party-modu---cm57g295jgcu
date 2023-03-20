const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const { Context } = require('mocha');
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/",(req,res)=>{
    res.send("Hello world!");
})

app.post("/add",(req,res)=>{
    const number1 = Number(req.body.num1);
    const number2 = Number(req.body.num2);
    //console.log(number1);
    
    if(Number.isNaN(number1) || Number.isNaN(number2)){
        res.send({
            status: "error",
            message: "Invalid data types"
        })
    }
    const sum = number1+number2;
    if(number1>1000000 || number2>1000000){
        res.send({
            status: "error",
            message: "Overflow"
        })
    }
    else if(number1<(-1000000) || number2<(-1000000)){
        res.send({
            status: "error",
            message: "Underflow"
        })
    }
    else if(sum>(1000000)){
        res.send({
            status: "error",
            message: "Overflow"
        })
    }
    else if(sum<(-1000000)){
        res.send({
            status: "error",
            message: "Underflow"
        })
    }
    else{
        res.send({
            status: "success",
            message: "the sum of given two numbers",
            sum: number1+number2
            })
    }

})

app.post("/sub",(req,res)=>{
    const number1 = Number(req.body.num1);
    const number2 = Number(req.body.num2);
    
    if(Number.isNaN(number1) || Number.isNaN(number2)){
        res.send({
            status: "error",
            message: "Invalid data types"
        })
    }
    const difference=number1-number2;
    if(number1>1000000 || number2>1000000){
        res.send({
            status: "error",
            message: "Overflow"
        })
    }
    else if(number1<(-1000000) || number2<(-1000000)){
        res.send({
            status: "error",
            message: "Underflow"
        })
    }
    else if(difference>(1000000)){
        res.send({
            status: "error",
            message: "Overflow"
        })
    }
    else if(difference<(-1000000)){
        res.send({
            status: "error",
            message: "Underflow"
        })
    }
    else{
        res.send({
            status: "success",
            message: "the difference of given two numbers",
            difference: difference
            })
    }

})

app.post("/multiply",(req,res)=>{
    const number1 = Number(req.body.num1);
    const number2 = Number(req.body.num2);
    
    if(Number.isNaN(number1) || Number.isNaN(number2)){
        res.send({
            status: "error",
            message: "Invalid data types"
        })
    }
    const result= number1*number2;
     if(number1>1000000 || number2>1000000){
        res.send({
            status: "error",
            message: "Overflow"
        })
    }
    else if(number1<(-1000000) || number2<(-1000000)){
        res.send({
            status: "error",
            message: "Underflow"
        })
    }
    
    else if(result>(1000000)){
        res.send({
            status: "error",
            message: "Overflow"
        })
    }

    else if(result<(-1000000)){
        res.send({
            status: "error",
            message: "Underflow"
        })
    }
    else{
        res.send({
            status: "success",
            message: "The product of given numbers",
            result: result
            })
    }

})

app.post("/divide",(req,res)=>{
    const number1 = Number(req.body.num1);
    const number2 = Number(req.body.num2);
    if(Number.isNaN(number1) || Number.isNaN(number2)){
        res.send({
            status: "error",
            message: "Invalid data types"
        })
    }
    if(number2==0){
        res.send({
            status: "error",
            message: "Cannot divide by zero"
        })
    }
    const result= number1/number2;
   

    if(number1>1000000 || number2>1000000){
        res.send({
            status: "error",
            message: "Overflow"
        })
    }
    else if(number1<(-1000000) || number2<(-1000000)){
        res.send({
            status: "error",
            message: "Underflow"
        })
    }
    
    else if(result>(1000000)){
        res.send({
            status: "error",
            message: "Overflow"
        })
    }

    else if(result<(-1000000)){
        res.send({
            status: "error",
            message: "Underflow"
        })
    }
    else{
        res.send({
            status: "success",
            message: "The division of given numbers",
            result: result
            })
    }

})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
