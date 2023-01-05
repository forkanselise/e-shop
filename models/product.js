const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    mobile: String,
    email: String,
    description: String,
    richDescription:  String,
    image: String,
    // images: String[],
    brand: String,
    price: Number,
    category: String,
    countInStock:{
        type: Number,
        required: true
    }
})

exports.Product = mongoose.model('product',ProductSchema);