import axios from 'axios';
import store from '../store/store';

const instance = axios.create({
    baseURL : 'http://localhost:8081', 
    headers : {
        'x-auth-token' : store.state.token
    }
});

export default instance;