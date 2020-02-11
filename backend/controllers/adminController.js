const {Quiz, QuizQuestions, QuizAnswers} = require('../models');
const {validationResult} = require('express-validator');

exports.getQuizzes = async (req,res) => {

    const quizzes = await Quiz.findAll();

    res.json({quizzes});


}

exports.addNewQuiz = async (req,res) => {

    try{

        const result = await Quiz.create({
            quizDescription : req.body.quizTitle
        });

        console.log(result);

        res.json({result});

    }catch(e){

        console.log(e);
    }

}

exports.getQuestions = async (req,res) => {

    const quizId = req.query.quizId;

    try {

        const questions = await QuizQuestions.findAll({
            where : {
                quiz_id : quizId
            }
        });

        res.json({questions});


    }catch(e){

        console.log(e);
        res.status(500).json({error : e});

    }



}

exports.addQuizItem = async (req,res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){

        return res.status(422).json({errors : errors.array()});

    }

    const {quizId, question, answers, correctAnswer} = req.body;



    try {

    let response = await QuizQuestions.create({
        quiz_id : quizId, 
        question, 
        correctAnswer
    });

    const questionId = response.dataValues.id;

    const dbAnswers = answers.map(answer => {
        return {
            quiz_question_id : questionId, 
            answerNumber : answer.answerNo, 
            answer : answer.answer
        }
    });

    await QuizAnswers.bulkCreate(dbAnswers);

    res.json({ok : 'added'});

    }catch(e){

        console.log(e);
        res.status(500).json({error : e});
        

    }

}

exports.getQuestionDetails = async (req,res) => {

    const questionId = req.params.questionId;

    try {

        const details = await QuizQuestions.findOne({
            where : {
                id : questionId
            }, 
            include : [
                {model : QuizAnswers}
            ]
        });

        res.json({details});

    }catch(e){
        console.log(e);
        res.status(500).json({error : e});
    }

}
