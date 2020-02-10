const router = require('express').Router();
const adminController = require('../controllers/adminController');
const newQuizItemValidation = require('../middleware/newQuizItemValidation');

router.get('/quiz', adminController.getQuizzes);
router.post('/quiz', adminController.addNewQuiz);
router.get('/getQuestions', adminController.getQuestions);
router.post('/addQuizItem', newQuizItemValidation, adminController.addQuizItem);
router.get('/question/:questionId', adminController.getQuestionDetails);


module.exports = router;