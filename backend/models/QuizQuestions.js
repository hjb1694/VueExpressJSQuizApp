

module.exports = (sequelize, DataTypes) => {

    const QuizQuestions = sequelize.define('QuizQuestions', {
        quiz_id : {
            type : DataTypes.INTEGER
        }, 
        question : {
            type : DataTypes.TEXT
        }, 
        correctAnswer : {
            type : DataTypes.INTEGER
        }
    });

    return QuizQuestions;

}