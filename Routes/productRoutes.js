const express = require( 'express' );
const productRoute = express.Router();
const ProductContoller = require( '../contoller/productContoller' );
const validateToken = require( '../middleware/tokenValidation' );
const ProductSchema = require( '../apiSchema/productSchema' );
const joiSchemaValidation = require( '../middleware/joiSchemaValidation' );
productRoute.post( '/', validateToken.validateJwtoken,joiSchemaValidation.validateBody(ProductSchema.ProductSchema),ProductContoller.createProduct );

module.exports=productRoute