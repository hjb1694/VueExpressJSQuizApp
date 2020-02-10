const {validationResult} = require('express-validator');
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const bcrypt = require('bcryptjs');


const signToken = user => {
    return jwt.sign({
        userId : user.id
    }, config.auth.jwtSecret, {
        expiresIn : '1hr'
    });
}


//Register Controller
exports.register =  async (req,res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){

        return res.status(422).json({errors : errors.array()});

    }

    const {name, email, password} = req.body;

    try{

    const user = await User.create({
        name, 
        email, 
        password
    })

    res.json({
        userId : user.id, 
        userName : user.name, 
        token : signToken(user)
    });

    }catch(e){

        console.log(e);
        res.status(500).json({
            errors : [
                {'msg' : 'A server error has occurred.'}
            ]
        });

    }

    
}

//Login Controller
exports.login = async (req,res) => {

    const {email, password} = req.body;

    try {

        const user = await User.findOne({
            where : {
                email
            }
        });

        if(!user){

            console.log('user cannot be found');

            return res.status(403).json({
                errors : [
                    {msg : 'The credentials you entered are invalid.'}
                ]
            });

        }


        const match = bcrypt.compareSync(password, user.password);

        if(!match){

            console.log('password does not match!');

            return res.status(403).json({
                errors : [
                    {msg : 'The credentials you entered are invalid.'}
                ]
            });

        }

        res.json({
            userId : user.id, 
            userName : user.name,
            token : signToken(user)
        });

        

    }catch(e){

        res.status(500).json({errors : [
            {msg : 'A server error has ocurred.'}
        ]});

    }



}