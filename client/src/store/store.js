import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
    state : {
        token : sessionStorage.getItem('js-quizzes-token') || null
    }, 
    getters : {
        isLoggedIn(state){
            if(state.token){
                return true;
            }else{
                return false;
            }
        }
    },
    mutations : {
        setToken(state, token){
            sessionStorage.setItem('js-quizzes-token', token);
            state.token = token;
        }, 
        logout(state){
            sessionStorage.removeItem('js-quizzes-token');
            state.token = null;

        }
    }, 
    actions : {
        setToken({commit}, token){
            commit('setToken', token);
        }, 
        logout({commit}){

            commit('logout');
        }
    }
});