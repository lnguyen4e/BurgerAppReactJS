import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-fc18c.firebaseio.com/'
});

export default instance;