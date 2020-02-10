import Vue from 'vue';
import VueRouter from 'vue-router';

//pages 
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';
import Admin from '@/pages/Admin/Admin.vue';
import AdminHome from '@/pages/Admin/AdminHome.vue';
import AdminQuizzes from '@/pages/Admin/AdminQuizzes.vue';
import QuizDetail from '@/pages/Admin/QuizDetail.vue';
import QuestionDetail from '@/pages/Admin/QuestionDetail';

import store from './store/store';


Vue.use(VueRouter);


const routes = [
    {path : '', name : 'root', component : Home}, 
    {path : '/register', name : 'register', component : Register, 
    beforeEnter(to, from, next){

        if(store.state.token){

            next({name : 'root'});

        } else {

            next();

        }


    }}, 
    {path : '/login', name : 'login', component : Login, 
    beforeEnter(to, from, next){

        if(store.state.token){

            next({name : 'root'});

        } else {

            next();

        }

    }}, 
    {path : '/admin', component: Admin, 
    children : [
        {path : '', name : 'admin-home', component : AdminHome}, 
        {path : 'quizzes', name : 'admin-quizzes', component : AdminQuizzes}, 
        {path : 'quizDetail/:quizId', name : 'quizDetail', component : QuizDetail}, 
        {path : 'questionDetail/:questionId', name : 'questionDetail', 
        component : QuestionDetail}
    ]}
];


export default new VueRouter({
    routes
});