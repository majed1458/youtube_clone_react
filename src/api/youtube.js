import axios from 'axios';

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults: 15,
        key:'AIzaSyD9lEL0tLqpUJaDP9f0oRK1kMM3L5k2yyk'
    }
})