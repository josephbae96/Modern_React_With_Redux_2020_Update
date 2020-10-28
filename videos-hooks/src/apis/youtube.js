import axios from 'axios';

const KEY = 'AIzaSyDxyQvzIeOowWz2wA2Sl4iCrxPpbcoXqPs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    },
});