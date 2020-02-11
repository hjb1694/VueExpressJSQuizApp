const router = require('express').Router();
const quizController = require('../controllers/quizController');

router.get('/quizList', quizController.getQuizList);
router.get('/quiz/:quizId', quizController.getQuiz);


module.exports = router;