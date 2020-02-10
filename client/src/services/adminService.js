import axios from './api';

export default {
    fetchQuizzes(){
        return axios.get('/admin/quiz');
    }, 
    addNewQuiz(quizTitle){
        return axios.post('/admin/quiz', {
            quizTitle
        });
    }, 
    fetchQuestions(quizId){
        return axios.get(`/admin/getQuestions?quizId=${quizId}`);
    }, 
    addNewQuestion(quizId, question, answers, correctAnswer){
        return axios.post('/admin/addQuestion',{
            quizId, 
            question, 
            answers, 
            correctAnswer
        });
    }, 
    fetchQuestionDetails(questionId){
        return axios.get(`/admin/question/${questionId}`);

    }
}