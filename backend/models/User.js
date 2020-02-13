const bcrypt = require('bcryptjs');


const hashPassword = password => bcrypt.hashSync(password, 8);


module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name : {
            type : DataTypes.STRING
        }, 
        email : {
            type : DataTypes.STRING, 
            unique : true
        }, 
        password : {
            type : DataTypes.TEXT
        }, 
        isAdmin : {
            type : DataTypes.BOOLEAN, 
            default : 0
        }
    });

    User.beforeCreate(user => user.password = hashPassword(user.password));
    User.beforeUpdate(user => user.password = hashPassword(user.password));

    return User;

}