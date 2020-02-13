import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
    state : {
        token : sessionStorage.getItem('js-quizzes-token') || null, 
        isAdmin : sessionStorage.getItem('js-quizzes-adm') || false
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
            sessionStorage.removeItem('js-quizzes-isadm');
            state.token = null;
            state.isAdmin = false;
        }, 
        setIsAdmin(state, isAdm){
            const isAdmin = isAdm ? true : false;
            state.isAdmin = isAdmin;
            sessionStorage.setItem('js-quizzes-isadm', isAdmin);
        }
    }, 
    actions : {
        setToken({commit}, token){
            commit('setToken', token);
        }, 
        logout({commit}){
            commit('logout');
        }, 
        setIsAdmin({commit}, isAdm){
            commit('setIsAdmin', isAdm);
        }
    }
});