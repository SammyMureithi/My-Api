const mongoose = require( 'mongoose' );
const User = require( '../database/models/userModel' );
const bcrypt = require( 'bcrypt' );
const helper = require( '../helper/dbHelper' );
const jwt = require( 'jsonwebtoken' );


module.exports.signUp = async ( { name, username, phoneNumber, nationalId, password } ) => {
    
    try {
        const user = await User.findOne(
            {
                $or: [{ name: name }, { username: username }, { phoneNumber: phoneNumber }, { nationalId: nationalId }]
            } )
        if ( user ) return { error: true, message: "User Already Exist" };
        const salt = await bcrypt.genSalt( 12 );
        password= await bcrypt.hash( password, salt );
        const newUser = new User( {
            name: name,
            username: username,
            phoneNumber: phoneNumber,
            nationalId: nationalId,
            password: password
        } );
        const addUser = await newUser.save();
        const newResult = helper.formatMongoDta( addUser );
        
        return { User: newResult, error: false };
       
    } catch ( error ) {
        return { error: true, message: error.message };
    }
   
}
module.exports.login = async ( {  username,  password } ) => {
    
    try {
        const user = await User.findOne({  username } )
        if ( !user ) return { error: true, message: "Invalid Username or Password" };
        const isValid = await bcrypt.compare( password, user.password );
        if ( !isValid ) return { error: true, message: "Invalid Username or Password" };
        const token = jwt.sign( { id: user._id }, process.env.SECRET_KEY || 'my_secrete_key', { expiresIn: "1d" } );
        return {
            error: false, message: "Login Successfuly",
            user: { id: user._id, name: user.name,signature:token },
            
        }
    } catch ( error ) {
        return { error: true, message: error.message };
    }
   
}