import api from './api';

export default {
    fetchQuizzes(){
        return api.get('/quizList');
    }, 
    fetchQuiz(quizId){
        return api.get(`/quiz/${quizId}`);
    }
}