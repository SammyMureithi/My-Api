const mongoose = require( 'mongoose' );
module.exports.formatMongoDta = ( data ) => {
    if ( Array.isArray( data ) ) {
        let dataList=[]
        for ( value of data ) {
            dataList.push( value.toObject() );
        }
        return dataList;
    }
    return data.toObject();
}