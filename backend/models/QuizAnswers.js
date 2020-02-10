module.exports = (sequelize, DataTypes) => {

    const QuizAnswers = sequelize.define('QuizAnswers', {
        quiz_question_id : {
            type : DataTypes.INTEGER
        }, 
        answerNumber : {
            type : DataTypes.INTEGER
        },
        answer : {
            type : DataTypes.TEXT
        }
    });

    return QuizAnswers;

}