const Joi = require( '@hapi/joi' );

module.exports.signUpSchema = Joi.object().keys( {
    name: Joi.string().required(),
    username: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    nationalId: Joi.number().required(),
    password: Joi.string().required()
} );
module.exports.login = Joi.object().keys( {
    username: Joi.string().required(),
    password:Joi.string().required()
})