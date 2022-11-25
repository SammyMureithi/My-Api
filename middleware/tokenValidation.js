const jwt = require( 'jsonwebtoken' );
const Constants = require( '../constants/index' );
module.exports.validateJwtoken = ( req, res, next ) => {
    let response = { ...Constants.responseMessage.defaultServerResponse };
    try {
        if ( !req.headers.authorization ) res.status( response.status ).send( { error: true, message: "Signature is Required" } );
        const token = req.headers.authorization.split( 'Bearer' )[1].trim();
        const decode = jwt.verify( token, process.env.SECRET_KEY || "my_secrete_key" );
        return next();
    } catch (error) {
        response.message = error.message;
        response.status = 401;
        console.log( 'Error', error );
    }
    return res.status(response.status).send(response)
}