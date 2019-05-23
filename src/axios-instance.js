import Axios from 'axios';

const instance = Axios.create({
    baseURL: process.env.REACT_APP_AXIOS_FIREBASE_SERVER,
    cors: true
});

export default instance;