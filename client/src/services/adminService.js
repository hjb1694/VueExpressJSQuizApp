import axios from './api';

export default {
    fetchQuizzes(){
        return axios.get('/admin/quiz');
    }, 
    addNewQuiz(quizTitle, imageURL){
        return axios.post('/admin/quiz', {
            quizTitle, 
            imageURL
        });
    }, 
    fetchQuestions(quizId){
        return axios.get(`/admin/getQuestions?quizId=${quizId}`);
    }, 
    addNewQuizItem(quizId, question, answers, correctAnswer){
        return axios.post('/admin/addQuizItem',{
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