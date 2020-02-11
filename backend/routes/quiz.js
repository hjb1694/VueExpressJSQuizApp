const router = require('express').Router();
const quizController = require('../controllers/quizController');
const isLoggedIn = require('../middleware/isLoggedIn');

router.get('/quizList', isLoggedIn, quizController.getQuizList);
router.get('/quiz/:quizId', isLoggedIn, quizController.getQuiz);


module.exports = router;