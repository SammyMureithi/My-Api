const express = require( 'express' );
const app = express();
const cors = require( 'cors' );
const userRoute = require( './Routes/userRoutes' );
const dbConnection = require( './database/connection' );
const productRoute = require( './Routes/productRoutes' );
app.use( express.json() );
app.use( cors() );
app.use( express.urlencoded( { extended: true } ) );
//Let's Connect to our Database
dbConnection();

//Lets now establish our routes
app.use( '/api/v2/User', userRoute );
app.use( '/api/v2/Products', productRoute );
app.listen( process.env.PORT || 3000, () => {
    console.log('Listening TO port 3000')
})