const {Quiz, QuizQuestions, QuizAnswers} = require('../models');

exports.getQuizList = async (req,res) => {

    try{

        const quizzes = await Quiz.findAll();

        if(!quizzes.length){

            return res.status(404).json({error : 'No quizzes found!'});

        }

        res.json({quizzes});

    }catch(e){

        console.log(e);
        res.status(500).json({error : e});

    }


}

exports.getQuiz = async (req,res) => {

    try{

        const quiz = await QuizQuestions.findAll({
            where : {
                quiz_id : req.params.quizId
            }, 
            include : [
                {model : QuizAnswers}
            ]
        });

        if(!quiz){
            res.status(404).json({error : 'Not Found!'});
        }

        res.json({quiz});


    }catch(e){
        console.log(e);
        res.status(500).json({error : e});
    }


}