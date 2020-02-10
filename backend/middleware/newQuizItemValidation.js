const {check} = require('express-validator');

module.exports = [
    check('answers').custom(answers => {
        if(!Array.isArray(answers)) throw new Error('"answers" must be an array!');
        return true;
    }),
    check('answers').custom(answers => {
        for(answer of answers){

            if(!answer.answerNo || !answer.answer){
                throw new Error('All answers provided must have an "answerNo" property and an "answer" property!');
                break;
            }

        }

        return true;
    }), 
    check('correctAnswer').custom((correctAnswer, {req}) => {

        const answerNums = req.body.answers.map(item => {
            return +(item.answerNo);
        });
    
        if(!answerNums.includes(+correctAnswer)){
            throw new Error('The "correct answer" you provided does not exist.');
        }

        return true;

    }), 
    check('question','Please include a question').trim().not().isEmpty()
];