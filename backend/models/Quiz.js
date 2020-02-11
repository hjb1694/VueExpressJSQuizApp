

module.exports = (sequelize, DataTypes) => {

    const Quiz = sequelize.define('Quiz', {
        quizDescription : {
            type : DataTypes.STRING
        }, 
        image : {
            type : DataTypes.TEXT
        },
        timestamps : false
    });

    return Quiz;



}