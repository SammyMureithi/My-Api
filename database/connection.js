const mongoose = require( 'mongoose' );

module.exports = async () => {
    try {
        await mongoose.connect( "mongodb://127.0.0.1/myApi", { useNewUrlParser: true } );
        console.log( 'Database connection done successfully' );

    } catch ( error ) {
        console.log( 'Error Connecting to Database...' );
        throw new Error( error );
       
    }
}