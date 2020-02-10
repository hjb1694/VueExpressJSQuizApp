const {Quiz, QuizQuestions, QuizAnswers} = require('../models');

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

    const {quizId, question, answers, correctAnswer} = req.body;


    const answerNums = answers.map(item => {
        return +(item.answerNo);
    });

    console.log(answerNums);

    if(!answerNums.includes(+correctAnswer)){
        return res.status(422).json({error : 'The "correct answer" you provided does not exist.'});
    }



    const dbAnswers = answers.map(item => {
        return {

        }
    });

    // try {

    // const response = await QuizQuestions.create({
    //     quiz_id : quizId, 
    //     question
    // });

    // console.log(response);
    // res.json({ok : 'added'});

    // }catch(e){

    //     console.log(e);
    //     res.status(500).json({error : e});

    // }

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
