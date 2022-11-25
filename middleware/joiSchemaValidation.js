const validateObjectSchema = ( schema, data ) => {
    const result = schema.validate( data );
    
    if ( result.error ) return true;
    return false;
}
module.exports.validateBody =  (schema) => {
    return ( req, res, next ) => {
        const errorValidation = validateObjectSchema( schema, req.body );
        if ( errorValidation ) return res.status(400).send( { error: true, message: "Error on Fields or Fields Type..." } )
        return next();
    }
}