const {check} = require('express-validator');
const {User} = require('../models');

module.exports = [
    check('name').custom(value => {

        if(
            value.trim().length < 3
        ) throw new Error('Please enter a valid name.');

        return true;

    }), 
    check('email').isEmail(), 
    check('email').custom(async value => {

        const user = await User.findOne({
            where : {
                email : value
            }
        });

        if(user){

            throw new Error('This email address already exists!');

        }

        return true;


    }),
    check('password').trim().isLength({min : 8})
];