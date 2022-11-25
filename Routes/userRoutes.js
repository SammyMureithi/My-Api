const express = require( 'express' );
const UserControler = require( '../contoller/userController' );
const userRoute = express.Router();
const UserSchema = require( '../apiSchema/userSchema' );
const joiSchemaValidation = require( '../middleware/joiSchemaValidation' );
userRoute.post( '/SignUp',
    joiSchemaValidation.validateBody( UserSchema.signUpSchema ),
    UserControler.singUp );
    userRoute.post( '/Login',
    joiSchemaValidation.validateBody( UserSchema.login ),
    UserControler.login );


module.exports = userRoute;