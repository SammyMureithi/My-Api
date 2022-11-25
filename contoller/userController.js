const UserService = require( '../service/userService' );
const Constants = require( '../constants/index' );

module.exports.singUp = async ( req, res ) => {
    let response = { ...Constants.responseMessage.defaultServerResponse };
    try {
        const result = await UserService.signUp( req.body );
        if ( result.error ) {
            response.message = result.message;
        }
        else {
            response.status = 200;
            response.message = Constants.responseMessage.user.USER_CREATED;
            response.body = result.User;
            response.error=false
        }
    } catch (error) {
        response.message = error.message;
    }
    return res.status( response.status ).send( response );
}
module.exports.login = async ( req, res ) => {
    let response = { ...Constants.responseMessage.defaultServerResponse };
    try {
        const result = await UserService.login( req.body );
        if ( result.error ) {
            response.message = result.message;
        }
        else {
            response.status = 200;
            response.message = result.message;
            response.body = result.user;
            response.error=false
        }
    } catch (error) {
        response.message = error.message;
    }
    return res.status( response.status ).send( response );
}