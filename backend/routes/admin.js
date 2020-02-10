const router = require('express').Router();
const adminController = require('../controllers/adminController');

router.get('/quiz', adminController.getQuizzes);
router.post('/quiz', adminController.addNewQuiz);
router.get('/getQuestions', adminController.getQuestions);
router.post('/addQuizItem', adminController.addQuizItem);
router.get('/question/:questionId', adminController.getQuestionDetails);


module.exports = router;