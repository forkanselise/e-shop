const express = require('express')
const mongoose = require("mongoose");


// const winston = require('winston')
const logger = require('logger')
const app = express()


// const Product = require('./models/product')

// require('dotenv.')

const dataModel = mongoose.Schema({
    Name: String,
    Mobile: String,
    Email: String
})

// const Products = mongoose.Schema({
//     name: String,
//     mobile: String,
//     email: String,
//     description: String,
//     richDescription:  String,
//     image: String,
//     images: String[],
//     brand: String,
//     price: Number,
//     category: 

// })

const Product = mongoose.model('orders',dataModel)
const Order = mongoose.model('orders',dataModel)


// const Order = mongoose.model('orders',dataModel)


app.use(express.json())
// app.use(logger('combined'))

app.get('/',async (req,res)=>{
    // res.send("hello");
    const list = await Product.find();
    res.send(list)
    
})

app.post('/',(req,res)=>{
    // const data=req.body
    const newData = new Product({
        Name: req.body.Name,
        Email: req.body.Email,
        Mobile: req.body.Mobile
    })
    newData.save()
    .then(createdData => {
        res.status(201).json(createdData)
    })
    .catch(err=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
    // res.send(newData);
})

mongoose.connect('mongodb+srv://demo:LaGD4GJvDhKbvCHg@cluster0.9tlyc.mongodb.net?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    dbName: 'E-Shop'
})
.then(()=> {
    console.log("mongodb connected")
})
.catch(err=> {
    console.log(err)
})

app.listen(3000,()=>{
    console.log("server 3000")
})