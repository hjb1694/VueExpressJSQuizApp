

module.exports = (sequelize, DataTypes) => {

    const Quiz = sequelize.define('Quiz', {
        quizDescription : {
            type : DataTypes.STRING
        }, 
        timestamps : false
    });

    return Quiz;



}