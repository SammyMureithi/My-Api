const ProductService = require( '../service/productService' );
const Constant = require( '../constants/index' );
module.exports.createProduct = async(req,res) => {
    let response = { ...Constant.responseMessage.defaultServerResponse };
    try {
        let createProductResult = await ProductService.createProduct( req.body );
        if ( createProductResult.error ) return res.status( response.status ).send( createProductResult );
        return res.send( createProductResult );
    } catch ( error ) {
       return res.send( error.message );
    }
}