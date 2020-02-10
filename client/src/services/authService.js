import axios from './api';

export default {
    register(name, email, password){
        return axios.post('/register',{
            name, 
            email, 
            password
        });
    }, 
    login(email, password){
        return axios.post('/login', {
            email, 
            password
        });
    }
}