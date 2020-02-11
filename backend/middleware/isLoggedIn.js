const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = (req,res,next) => {

    const token = req.header('x-auth-token');

    if(!token){

        return res.status(500).json({error : 'access denied!'});

    }

    try{

    const verified = jwt.verify(token, config.auth.jwtSecret);

    next();

    }catch(e){

        console.log(e);

        res.status(403).json({error : 'access denied!'});

    }


}