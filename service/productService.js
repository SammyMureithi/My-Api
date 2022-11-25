const Product = require( '../database/models/productModel' );
const Constant = require( '../constants/index' );
module.exports.createProduct = async ({name,price,quantity,supplier}) => {
    let response = { ...Constant.responseMessage.defaultServerResponse };
    try {
        let product = await Product.findOne( { name } );
        if ( product ) {
            response.message = "Product Already Exist";
            return response;
        }
        const newProduct = new Product( {
            name, price, quantity, supplier
        } );
        const resultProduct = await newProduct.save();
        response.body = resultProduct;
        response.error = false;
    } catch (error) {
        response.message = error.message;
    }
    return response;
}