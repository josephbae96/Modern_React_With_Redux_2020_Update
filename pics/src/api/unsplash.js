import axios from 'axios';
import AUTHORIZATION_KEY from './Keys';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 
        AUTHORIZATION_KEY
    },
});
