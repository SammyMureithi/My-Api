const mongoose = require( 'mongoose' );
const productSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    supplier: {
        type: String,
        required: true
    }
} );
const Product = mongoose.model( 'Products', productSchema );
module.exports = Product;