const Joi = require( '@hapi/joi' );

module.exports.ProductSchema = Joi.object().keys( {
    name: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
    supplier:Joi.string().required()
})